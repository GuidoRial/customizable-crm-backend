import { Service } from "typedi";
import { IUser } from "../../interfaces/IUser";
import UserModel from "../../models/User";
import BaseController from "./base";
import UserService from "../../services/users";
import { Request, Response } from "express";

@Service()
export default class UserController extends BaseController<
  UserService,
  typeof UserModel,
  IUser
> {
  constructor(service: UserService) {
    super(service);
  }
}
