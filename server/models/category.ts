import { Schema, model, Document } from "mongoose";
import { ICategory } from "../interfaces/ICategory";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categoryType: {
    type: String,
    enum: ["expense", "income"],
    required: true,
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  isDefault: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default model<ICategory & Document>(
  "Category",
  categorySchema,
  "categories",
);
