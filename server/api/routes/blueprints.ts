import { Router } from "express";
import controllers from "../controllers";
import Container from "typedi";
import middlewares from "../middlewares";
const route = Router();

export default (app: Router) => {
  app.use("/blueprints", route);

  const controller = Container.get(controllers.blueprints);

  route.post("/", middlewares.isAuth, controller.create.bind(controller));
  route.get(
    "/",
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    controller.read.bind(controller),
  );

  route.get("/:id", middlewares.isAuth, controller.read.bind(controller));
};
