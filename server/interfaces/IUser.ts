import { Document } from "mongoose";
export interface IUser extends Document {
  _id: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
  email_address?: string;
}
