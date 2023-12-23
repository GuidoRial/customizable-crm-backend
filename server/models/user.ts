import mongoose from 'mongoose';
import { IUser } from '../interfaces/IUser';

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    email_address: {
      type: String,
      trim: true,
    },
    last_name: {
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
  { timestamps: true }
);

export default mongoose.model<IUser & mongoose.Document>('User', UserSchema, 'users');
