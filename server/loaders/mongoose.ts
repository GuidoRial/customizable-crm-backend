import mongoose, { ConnectOptions } from "mongoose";
import config from "../config";
import Container from "typedi";

export default async (): Promise<any> => {
  mongoose.connect(config.databaseURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as ConnectOptions);

  mongoose.set("toJSON", { virtuals: true });

  Container.set("database", mongoose.connection);

  return mongoose.connection;
};
