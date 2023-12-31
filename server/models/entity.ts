import mongoose from "mongoose";
import { IEntity } from "../interfaces/entity";
import EntityFieldSchema from "./fields";
const EntitySchema = new mongoose.Schema(
  {
    blueprint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blueprint",
      required: true,
    },
    fields: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "EntityField",
        },
      ],
    },
  },
  { timestamps: true, strict: true },
);

export default mongoose.model<IEntity & mongoose.Document>(
  "Entity",
  EntitySchema,
  "entities",
);
