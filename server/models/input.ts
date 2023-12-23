import mongoose from "mongoose";
import { IEntityField } from "../interfaces/fields";

const ValueSchema = new mongoose.Schema(
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
    referencesToEntity: {
      type: Boolean,
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
  { timestamps: true, strict: true },
);

export default mongoose.model<IEntityField & mongoose.Document>(
  "Input",
  ValueSchema,
  "inputs",
);
