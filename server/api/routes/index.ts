import { Router } from "express";

import authRoutes from "./auth";

export default (): any => {
  const app = Router();
  authRoutes(app);
  return app;
};
