import Container, { Service } from "typedi";
import CRUDBase from "./CRUDBase";
import Blueprint from "../models/blueprint";
import { IBlueprint } from "../interfaces/blueprint";
import FieldService from "./fields";
import { IField } from "../interfaces/fields";
import { convert_to_snake_case } from "../../utils";
@Service()
export default class BlueprintsService extends CRUDBase<
  typeof Blueprint,
  IBlueprint
> {
  constructor() {
    super(Blueprint, "blueprints");
  }

  override create = {
    one: async ({
      blueprint,
      fields,
    }: {
      blueprint: IBlueprint;
      fields: IField[];
    }) => {
      this.emitEvent("create.one");
      const fieldService = Container.get(FieldService);

      const { canBeReferenced, map } = blueprint.metadata;

      const createBlueprintDTO = {
        ...blueprint,
        metadata: { canBeReferenced, map: convert_to_snake_case(map) },
      };

      const createdBlueprint = await this.model.create(createBlueprintDTO);

      const fieldsDTO = fields.map((field) => ({
        ...field,
        blueprint: createdBlueprint._id,
        key: convert_to_snake_case(field.label),
      }));
      const createdFields = await fieldService.create.many(fieldsDTO);

      const update = {
        fields: createdFields.map((field) => field._id) as unknown as IField[],
      };
      const updatedBlueprint = await this.update.one.byId(
        createdBlueprint._id,
        update,
      );

      return createdBlueprint
    },
    many: async (objects: Partial<IBlueprint>[]) => {
      this.emitEvent("create.many");
      return this.model.insertMany(objects);
    },
  };
}
