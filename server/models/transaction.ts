import mongoose from "mongoose";
import { ITransaction } from "../interfaces/ITransaction";

const userAndWallet = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
  },
});

const transactionSchema = new mongoose.Schema(
  {
    data: {
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ["deposit", "transfer", "withdrawal"],
        required: true,
      },
      description: {
        type: String,
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
      date: {
        type: Date,
      },
    },
    sender: userAndWallet,
    receiver: userAndWallet,
  },
  { timestamps: true, strict: true },
);

export default mongoose.model<ITransaction & mongoose.Document>(
  "Transaction",
  transactionSchema,
  "transactions",
);
