import { Service } from "typedi";
import UserModel from "../models/user";
import CRUDBase from "./base";
import { IUser } from "../interfaces/IUser";
@Service()
export default class UserService extends CRUDBase<typeof UserModel, IUser> {
  constructor() {
    super(UserModel);
  }
}
