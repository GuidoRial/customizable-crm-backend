import { Request, Response } from "express";
import { Container } from "typedi";
import AuthService from "../../services/auth";
import ErrorService from "../../services/error";

export default {
  async signIn(req: Request, res: Response) {
    try {
      const authService = Container.get(AuthService);
      const authResponse = await authService.signIn(req.body);
      return res.status(200).json(authResponse);
    } catch (e) {
      const errorService = Container.get(ErrorService);
      const error = errorService.generateError(e);
      return res.status(error.code).json(error);
    }
  },

  async signUp(req: Request, res: Response) {
    try {
      const authService = Container.get(AuthService);
      const user = req.body;
      const authResponse = await authService.signUp(user);
      return res.status(200).json(authResponse);
    } catch (e) {
      const errorService = Container.get(ErrorService);
      const error = errorService.generateError(e);
      return res.status(error.code).json(error);
    }
  },
};
