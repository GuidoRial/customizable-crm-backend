import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IUser & mongoose.Document>(
  "User",
  UserSchema,
  "users",
);
