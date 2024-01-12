import { Container } from "typedi";
import mongoose from "mongoose";
import { IUser } from "../../interfaces/IUser";
import { Logger as ILogger } from "winston";
import UserService from "../../services/users";

const attachCurrentUser = async (req, res, next) => {
  try {
    const userService = Container.get(UserService);
    const userRecord = await userService.read.one.byId(req.token._id);
    if (!userRecord) {
      return res.sendStatus(401);
    }
    delete userRecord.password;
    req.user = userRecord;

    return next();
  } catch (e) {
    return next(e);
  }
};

export default attachCurrentUser;
