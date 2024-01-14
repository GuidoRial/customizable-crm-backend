import { Router } from "express";
import controllers from "../controllers";
import Container from "typedi";
import middlewares from "../middlewares";
const route = Router();

export default (app: Router) => {
  app.use("/entities", route);

  const controller = Container.get(controllers.entities);

  route.post("/", middlewares.isAuth, controller.create.bind(controller));
};
