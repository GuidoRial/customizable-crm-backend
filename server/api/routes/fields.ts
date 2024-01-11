import { Router } from "express";
import controllers from "../controllers";
import Container from "typedi";
import { CRUDGenerator } from "../../../utils";
const route = Router();

export default (app: Router) => {
  app.use("/fields", route);

  const controller = Container.get(controllers.fields);
};
