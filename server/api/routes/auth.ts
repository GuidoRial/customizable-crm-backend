import { Router } from "express";
import controllers from "../controllers";
const route = Router();

export default (app: Router) => {
  app.use("/auth", route);

  route.post("/sign-in", controllers.auth.signIn);

  route.post("/sign-up", controllers.auth.signUp);
};
