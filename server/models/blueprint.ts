import mongoose from "mongoose";
import EntityFieldSchema from "./fields";
import { IEntityBlueprint } from "../interfaces/blueprint";
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
    fields: [EntityFieldSchema],
  },
  { timestamps: true, strict: true },
);

export default mongoose.model<IEntityBlueprint & mongoose.Document>(
  "Blueprint",
  BlueprintSchema,
  "blueprints",
);
