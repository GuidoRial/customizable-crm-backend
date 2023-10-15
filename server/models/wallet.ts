import { Schema, model, Document } from "mongoose";
import { IWallet } from "../interfaces/IWallet";

const wallet = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  address: {
    addressType: {
      type: String,
      enum: ["address", "CBU", "CVU", "alias"],
    },
    chain: String,
    value: String,
  },
  isPhysicalWallet: {
    type: Boolean,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  balances: [
    {
      type: Number,
      date: Date,
      default: 0,
    },
  ],
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
export default model<IWallet & Document>("Wallet", wallet, "wallets");
