import mongoose from "mongoose";

import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    currencies: {
      type: Array,
      default: ["USD", "USDT", "ARS"],
    },
    wallets: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Wallet",
        },
      ],
      default: [],
    },
    transactions: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Transaction", // Use the Transaction model reference
      default: [],
    },
  },
  { timestamps: true, strict: true },
);

export default mongoose.model<IUser & mongoose.Document>(
  "User",
  UserSchema,
  "users",
);
