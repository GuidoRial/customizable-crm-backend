import mongoose from "mongoose";
import { IField } from "../interfaces/fields";

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
    description: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: [
        "text",
        "select",
        "number",
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
    blueprint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blueprint",
      required: true,
    },
    options: {
      type: [String],
    },
  },
  { timestamps: true, strict: true },
);

export default mongoose.model<IField & mongoose.Document>(
  "EntityField",
  EntityFieldSchema,
  "entityFields",
);
