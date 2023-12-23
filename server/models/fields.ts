import mongoose from "mongoose";
import { IEntityField } from "../interfaces/entity";

const EntityFieldSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    key: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: [
        "text",
        "select",
        "number",
        "select",
        "checkbox",
        "radio",
        "textarea",
        "date",
        "reference",
      ],
      required: true,
    },
    required: {
      type: Boolean,
      required: true,
    },
    entity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Entity",
      required: true,
    },
    options: {
      type: [
        {
          label: String,
          value: String,
        },
      ],
    },
  },
  { timestamps: true, strict: true, _id: false },
);

export default mongoose.model<IEntityField & mongoose.Document>(
  "EntityField",
  EntityFieldSchema,
  "entityFields",
);
