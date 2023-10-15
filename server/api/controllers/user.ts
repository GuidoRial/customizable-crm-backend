import UserService from "../../service/users";
import UserModel from "../../models/user";
import { IUser } from "../../interfaces/IUser";
import BaseController from "./base";
import { Service } from "typedi";

@Service()
class UserController extends BaseController<
  UserService,
  typeof UserModel,
  IUser
> {
  constructor(service: UserService) {
    super(service);
  }
}

export default UserController;
