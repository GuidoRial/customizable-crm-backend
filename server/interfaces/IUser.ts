import { Document } from "mongoose";
export interface IUser extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
}
