import { Service } from "typedi";
import { IUser } from "../../interfaces/IUser";
import UserModel from "../../models/User";
import BaseController from "./base";
import UserService from "../../services/users";
import { Request, Response } from "express";
import FieldService from "../../services/fields";
import Fields from "../../models/fields";
import { IEntityField } from "../../interfaces/fields";

@Service()
export default class FieldController extends BaseController<
  FieldService,
  typeof Fields,
  IEntityField
> {
  constructor(service: FieldService) {
    super(service);
  }
}
