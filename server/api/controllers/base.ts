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

  // DONE - getFields
  public fields = async function (req: Request, res: Response): Promise<void> {
    const { field } = req.query;
    try {
      const response = await this.service.getFields(field as string);

      res.status(200).json(response);
    } catch (e) {
      res.status(e.statusCode || 500).json(e);
    }
  };

  // DONE - createOne, createMany
  public create = async function (req: Request, res: Response): Promise<void> {
    const { body } = req;
    try {
      const target = Array.isArray(body) ? "createMany" : "createOne";

      const response = await this.service[target](body);

      res.status(200).json(response);
    } catch (e) {
      res.status(e.statusCode || 500).json(e);
    }
  };

  //DONE - getById, getMany
  public read = async function (
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const id = req.params.id;
      const query = booleanParser(req.query);
      const populate =
        req.query?.populate && JSON.parse(req.query.populate as string);

      const promise = id
        ? this.service.getById({ id, populate })
        : this.service.getMany({ query, populate });

      const response = await promise;
      return res.status(200).json(response);
    } catch (e) {
      res.status(e.statusCode || 500).json(e);
    }
  };

  //DONE - updateOneById, updateManyById
  public update = async function (req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const ids = getIds(req.query.ids as string);
    const dto = req.body;
    const promise = id
      ? this.service.updateOneById(id, dto)
      : this.service.updateManyById(ids, dto);

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
      ? this.service.deleteOneById(id)
      : this.service.deleteManyById(ids);

    try {
      const response = await promise;

      res.status(200).json(response);
    } catch (e) {
      res.status(e.statusCode || 500).json(e);
    }
  };
}

export default BaseController;
