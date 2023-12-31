import { Service } from "typedi";
import CRUDBase from "./CRUDBase";
import Fields from "../models/fields";
import { IField } from "../interfaces/fields";
@Service()
export default class FieldService extends CRUDBase<typeof Fields, IField> {
  constructor() {
    super(Fields, "fields");
  }
}
