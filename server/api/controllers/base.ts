import { Request, Response } from 'express';
import CRUDBase from '../../services/CRUDBase';
import { Model, Document } from 'mongoose';
import { Service } from 'typedi';
import { EventDispatcher, EventDispatcherInterface } from '../../decorators/eventDispatcher';

@Service()
class BaseController<C extends CRUDBase<T, I>, T extends Model<I & Document>, I extends Document> {
  @EventDispatcher() public eventDispatcher: EventDispatcherInterface;
  constructor(public service: C, ) {}

  public create = {
    one: async (req: Request, res: Response) => {
      try {
        const object = await this.service.create.one(req.body);
        res.status(200).json(object);
      } catch (error) {
        res.status(400).json(error);
      }
    },
    many: async (req: Request, res: Response) => {
      try {
        const objects = await this.service.create.many(req.body);
        res.status(200).json(objects);
      } catch (error) {
        res.status(400).json(error);
      }
    },
  };

  public read = {
    all: async (req: Request, res: Response) => {
      try {
        const objects = await this.service.read.all();
        res.status(200).json(objects);
      } catch (error) {
        res.status(400).json(error);
      }
    },
    one: {
      by: async (req: Request, res: Response) => {
        try {
          const object = await this.service.read.one.by(req.body);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
      byId: async (req: Request, res: Response) => {
        try {
          const object = await this.service.read.one.byId(req.params.id);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
    },
    many: {
      by: async (req: Request, res: Response) => {
        try {
          const objects = await this.service.read.many.by(req.body);
          res.status(200).json(objects);
        } catch (error) {
          res.status(400).json(error);
        }
      },
      byId: async (req: Request, res: Response) => {
        try {
          const objects = await this.service.read.many.byId(req.body);
          res.status(200).json(objects);
        } catch (error) {
          res.status(400).json(error);
        }
      },
    },
  };

  public update = {
    one: {
      by: async (req: Request, res: Response) => {
        const q = JSON.parse(req.params.q);
        const dto = req.body;
        try {
          const object = await this.service.update.one.by(q, dto);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
      byId: async (req: Request, res: Response) => {
        const { id } = req.params;
        const dto = req.body;
        try {
          const object = await this.service.update.one.byId(id, dto);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
    },
    many: {
      by: async (req: Request, res: Response) => {
        const q = JSON.parse(req.params.q);
        const dto = req.body;
        try {
          const object = await this.service.update.many.by(q, dto);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
      byId: async (req: Request, res: Response) => {
        const ids = JSON.parse(req.params.ids);
        const dto = req.body;
        try {
          const object = await this.service.update.many.byId(ids, dto);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
    },
  };

  public remove = {
    one: {
      by: async (req: Request, res: Response) => {
        const q = JSON.parse(req.params.q);
        try {
          const object = await this.service.remove.one.by(q);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
      byId: async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
          const object = await this.service.remove.one.byId(id);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
    },
    many: {
      by: async (req: Request, res: Response) => {
        const q = JSON.parse(req.params.q);
        try {
          const object = await this.service.remove.many.by(q);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
      byId: async (req: Request, res: Response) => {
        const ids = JSON.parse(req.params.ids);
        try {
          const object = await this.service.remove.many.byId(ids);
          res.status(200).json(object);
        } catch (error) {
          res.status(400).json(error);
        }
      },
    },
  };
}

export default BaseController;
