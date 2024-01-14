import { Service } from "typedi";
import CRUDBase from "./CRUDBase";
import entity from "../models/entity";
import { IEntity } from "../interfaces/entity";
@Service()
export default class EntitiesService extends CRUDBase<typeof entity, IEntity> {
  constructor() {
    super(entity, "entities");
  }

  //   override create = {
  //     one: async ({

  //     }) => {
  //       this.emitEvent("create.one");
  //       /**
  //        * STEPS:
  //        * 1. From DTO: get blueprint id
  //        * 2. Get blueprint from DB
  //        * 3. Get blueprint fields
  //        * 4. Instanciate Schemy model with blueprint fields
  //        * 5. Get fields values from DTO
  //        * 7. Validate using schemy
  //        * 8. Save to DB
  //        */

  //       return {};
  //     },
  //     many: async (objects: Partial<any>[]) => {
  //       this.emitEvent("create.many");
  //       return this.model.insertMany(objects);
  //     },
}
