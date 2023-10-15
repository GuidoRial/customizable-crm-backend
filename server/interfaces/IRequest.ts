import mongoose from "mongoose";
import { Request } from "express";
import { IUser } from "./IUser";

export interface IRequest extends Request {
  cache?: any;
  fullURL?: string;
  user: IUser & mongoose.Document;
}
