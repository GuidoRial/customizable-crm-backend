import mongoose from "mongoose";
import { IEntityBlueprint } from "../interfaces/entity";
import EntityFieldSchema from "./fields";
const BlueprintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    metadata: {
      canBeReferenced: {
        type: Boolean,
        map: {
          label: {
            type: String,
            required: true,
            trim: true,
          },
          value: {
            type: String,
            required: true,
            trim: true,
          },
        },
      },
    },
    fields: EntityFieldSchema,
  },
  { timestamps: true, strict: true },
);

export default mongoose.model<IEntityBlueprint & mongoose.Document>(
  "Blueprint",
  BlueprintSchema,
  "blueprints",
);
