import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { Service } from "typedi";
import config from "../config";
import UserService from "./users";
import { ILoginUserDTO, IUser } from "../interfaces/IUser";
import { NotFoundError } from "../errors";
import BadRequestError from "../errors/BadRequestError";

@Service()
export default class AuthService {
  constructor(private userService: UserService) {}

  async generateSession(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret,
    );
  }
  async signIn({ identifier, password }: ILoginUserDTO) {
    const user = await this.userService.read.one.by({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const dbPassword = user.password;

    const validPassword = await argon2.verify(dbPassword, password);

    if (!validPassword) throw new BadRequestError("Invalid Credentials");

    const session = await this.generateSession(user);

    const { email, firstName, lastName, username, _id } = user;

    return {
      user: { email, firstName, lastName, username, _id },
      session,
    };
  }

  async signUp(userDTO: Partial<IUser>) {
    const hashedPassword = await argon2.hash(userDTO.password);

    if (!hashedPassword) {
      throw new Error("Error hashing account");
    }

    const user = await this.userService.create.one({
      ...userDTO,
      password: hashedPassword,
    });

    const session = await this.generateSession(user);

    const { email, firstName, lastName, username, _id } = user;

    return {
      user: { email, firstName, lastName, username, _id },
      session,
    };
  }
}
