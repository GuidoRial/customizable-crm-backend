import { Request, Response } from 'express';
import CRUDBase from '../../services/CRUDBase';
import { Model, Document } from 'mongoose';
import { Service } from 'typedi';
import { booleanParser } from '../../../utils';

@Service()
class BaseController<C extends CRUDBase<T, I>, T extends Model<I & Document>, I extends Document> {
  constructor(public service: C) {}

  public create = {
    //  route.post("/", controller.create.one.bind(controller));
    one: async (req: Request, res: Response) => {
      try {
        const object = await this.service.create.one(req.body);
        res.status(200).json(object);
      } catch (error) {
        res.status(500).json(error);
      }
    },
    //  route.post("/bulk", controller.create.many.bind(controller));
    many: async (req: Request, res: Response) => {
      try {
        const objects = await this.service.create.many(req.body);
        res.status(200).json(objects);
      } catch (error) {
        res.status(500).json(error);
      }
    },
  };

  public read = {
    //  route.get("/", controller.read.all.bind(controller));
    all: async (req: Request, res: Response) => {
      try {
        const query = booleanParser(req.query);

        const promise = Object.keys(query).length ? this.service.read.many.by(query) : this.service.read.all();

        const objects = await promise;

        res.status(200).json(objects);
      } catch (error) {
        res.status(500).json(error);
      }
    },
    one: {
      //  route.get('/:id', controller.read.one.byId.bind(controller));
      byId: async (req: Request, res: Response) => {
        try {
          const object = await this.service.read.one.byId(req.params.id);
          res.status(200).json(object);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    },
  };

  public update = {
    one: {
      // route.put('/:id', controller.update.one.byId.bind(controller));
      byId: async (req: Request, res: Response) => {
        const { id } = req.params;
        const dto = req.body;
        try {
          const object = await this.service.update.one.byId(id, dto);
          res.status(200).json(object);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    },
    many: {
      // route.put('/', controller.update.many.by.bind(controller));
      by: async (req: Request, res: Response) => {
        const q = JSON.parse(req.params.q);
        const dto = req.body;
        try {
          const object = await this.service.update.many.by(q, dto);
          res.status(200).json(object);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    },
  };

  public delete = {
    one: {
      // route.delete('/:id', controller.delete.one.byId.bind(controller));
      byId: async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
          const object = await this.service.delete.one.byId(id);
          res.status(200).json(object);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    },
    many: {
      by: async (req: Request, res: Response) => {
        const q = JSON.parse(req.params.q);
        const byId = booleanParser(JSON.parse(req.query.byId as string));
        const ids = JSON.parse(req.params.ids);
        try {
          const promise = byId ? this.service.delete.many.byId(ids) : this.service.delete.many.by(q);
          const object = await promise;

          res.status(200).json(object);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    },
  };
}

export default BaseController;
