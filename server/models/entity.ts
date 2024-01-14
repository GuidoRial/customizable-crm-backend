import mongoose from "mongoose";
import { IEntity } from "../interfaces/entity";
const EntitySchema = new mongoose.Schema(
  {
    blueprint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blueprint",
      required: true,
    },
  },
  { timestamps: true, strict: true },
);

export default mongoose.model<IEntity & mongoose.Document>(
  "Entity",
  EntitySchema,
  "entities",
);
