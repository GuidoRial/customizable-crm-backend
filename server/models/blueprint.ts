import mongoose from "mongoose";
import EntityFieldSchema from "./fields";
import { IBlueprint } from "../interfaces/blueprint";
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
      },
      map: {
        label: {
          type: String,
          trim: true,
        },
        value: {
          type: String,
          trim: true,
        },
      },
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

export default mongoose.model<IBlueprint & mongoose.Document>(
  "Blueprint",
  BlueprintSchema,
  "blueprints",
);
