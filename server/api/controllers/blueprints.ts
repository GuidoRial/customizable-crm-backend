import { Service } from "typedi";
import BaseController from "./base";
import BlueprintsService from "../../services/blueprints";
import Blueprint from "../../models/blueprint";
import { IBlueprint } from "../../interfaces/blueprint";

@Service()
export default class BlueprintsController extends BaseController<
  BlueprintsService,
  typeof Blueprint,
  IBlueprint
> {
  constructor(service: BlueprintsService) {
    super(service);
  }
}
