import { Router } from "express";
import controllers from "../controllers";
import Container from "typedi";
const route = Router();

export default (app: Router) => {
  app.use("/fields", route);

  const controller = Container.get(controllers.fields);
};
