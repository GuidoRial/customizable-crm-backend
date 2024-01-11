import { Router } from "express";
import controllers from "../controllers";
import Container from "typedi";
const route = Router();

export default (app: Router) => {
  app.use("/blueprints", route);

  const controller = Container.get(controllers.blueprints);

  route.post("/", controller.create.bind(controller));
};
