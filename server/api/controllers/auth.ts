import { Request, Response } from "express";
import { Container } from "typedi";
import AuthService from "../../services/auth";

export default {
  async signIn(req: Request, res: Response) {
    try {
      const authService = Container.get(AuthService);
      const authResponse = await authService.signIn(req.body);
      return res.status(200).json(authResponse);
    } catch (e) {
      console.log("Error : ", e.message, e.stack);
      return res
        .status(e.statusCode || 500)
        .json({ message: e.message, stack: e.stack });
    }
  },

  async signUp(req: Request, res: Response) {
    try {
      const authService = Container.get(AuthService);
      const user = req.body;
      const authResponse = await authService.signUp(user);
      return res.status(200).json(authResponse);
    } catch (e) {
      console.log("Error : ", e.message, e.stack);
      return res
        .status(e.statusCode || 500)
        .json({ message: e.message, stack: e.stack });
    }
  },
};
