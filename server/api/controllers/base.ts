import { Request, Response } from "express";
import CRUDBase from "../../services/CRUDBase";
import { Model, Document } from "mongoose";
import { Service } from "typedi";
import { booleanParser, getIds } from "../../../utils";
import _ from "lodash";

@Service()
class BaseController<
  C extends CRUDBase<T, I>,
  T extends Model<I & Document>,
  I extends Document,
> {
  constructor(public service: C) {}

  public create = async function (req: Request, res: Response): Promise<void> {
    const { body } = req;
    try {
      const target = Array.isArray(body) ? "many" : "one";

      const response = await this.service.create[target](body);

      res.status(200).json(response);
    } catch (e) {
      res.status(e.statusCode || 500).json(e);
    }
  };

  public read = async function (
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const id = req.params.id;
      const query = booleanParser(req.query);

      const promise = id
        ? this.service.read.one.byId(id)
        : this.service.read.many.by(query);

      const response = await promise;
      return res.status(200).json(response);
    } catch (e) {
      res.status(e.statusCode || 500).json(e);
    }
  };

  public update = async function (req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const ids = getIds(req.query.ids as string);
    const dto = req.body;
    const promise = id
      ? this.service.update.one.byId(id, dto)
      : this.service.update.many.byId(ids, dto);

    try {
      const response = await promise;

      res.status(200).json(response);
    } catch (e) {
      res.status(e.statusCode || 500).json(e);
    }
  };

  public delete = async function (req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const ids = getIds(req.query.ids as string);
    const promise = id
      ? this.service.delete.one.byId(id)
      : this.service.delete.many.byId(ids);

    try {
      const response = await promise;

      res.status(200).json(response);
    } catch (e) {
      res.status(e.statusCode || 500).json(e);
    }
  };
}

export default BaseController;
