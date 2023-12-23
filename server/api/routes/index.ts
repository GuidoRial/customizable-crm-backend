import { Router } from "express";

import authRoutes from "./auth";
import fieldRoutes from "./fields";
export default (): any => {
  const app = Router();
  authRoutes(app);
  fieldRoutes(app);
  return app;
};
