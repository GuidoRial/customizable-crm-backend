import { Container } from "typedi";
import mongoose from "mongoose";
import { IUser } from "../../interfaces/IUser";
import { Logger as ILogger } from "winston";

const attachCurrentUser = async (req, res, next) => {
  const Logger = Container.get<ILogger>("logger");
  try {
    const UserModel = Container.get("userModel") as mongoose.Model<
      IUser & mongoose.Document
    >;
    const userRecord = await UserModel.findById(req.token._id);
    if (!userRecord) {
      return res.sendStatus(401);
    }
    const user = userRecord.toObject();
    Reflect.deleteProperty(user, "password");
    req.user = user;
    return next();
  } catch (e) {
    Logger.error("🔥 Error attaching user to req: %o", e);
    return next(e);
  }
};

export default attachCurrentUser;
