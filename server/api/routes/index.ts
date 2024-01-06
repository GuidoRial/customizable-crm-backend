import { Router } from "express";

import authRoutes from "./auth";
import blueprintsRoutes from "./blueprints";
import entitiesRoutes from "./entities";
import fieldRoutes from "./fields";
import userRoutes from "./users";
export default (): any => {
  const app = Router();
  authRoutes(app);
  fieldRoutes(app);
  entitiesRoutes(app);
  blueprintsRoutes(app);
  userRoutes(app);
  return app;
};
