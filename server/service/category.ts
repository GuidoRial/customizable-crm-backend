import { Service } from "typedi";
import CategoryModel from "../models/category";
import CRUDBase from "./base";
import { ICategory } from "../interfaces/ICategory";
@Service()
export default class UserService extends CRUDBase<
  typeof CategoryModel,
  ICategory
> {
  constructor() {
    super(CategoryModel);
  }
}
