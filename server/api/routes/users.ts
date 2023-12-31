import { Router } from "express";
import controllers from "../controllers";
import Container from "typedi";
const route = Router();

export default (app: Router) => {
  app.use("/users", route);

  const controller = Container.get(controllers.users);

  route.get("/field", controller.fields.bind(controller));
  route.get("/:id", controller.read.bind(controller));
  route.put("/:id", controller.update.bind(controller));
};
