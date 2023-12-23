import { Request, Response } from 'express';
import CRUDBase from '../../service/CRUDBase';
import { Model, Document } from 'mongoose';
import { Service } from 'typedi';

@Service()
class BaseController<C extends CRUDBase<T, I>, T extends Model<I & Document>, I extends Document> {
  constructor(public service: C) {}
  async getAll(req: Request, res: Response) {
    try {
      const result = await this.service.getAll();
      return res.status(200).json(result);
    } catch (e) {
      console.log('Error : ', e.message, e.stack);
      return res.status(500).json({ stack: e.stack, message: e.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await this.service.findById(id);
      return res.status(200).json(result);
    } catch (e) {
      console.log('Error : ', e.message, e.stack);
      return res.status(500).json({ stack: e.stack, message: e.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const dto = req.body;
      const result = await this.service.updateById(id, dto);
      return res.status(200).json(result);
    } catch (e) {
      console.log('Error : ', e.message, e.stack);
      return res.status(500).json({ stack: e.stack, message: e.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const dto = req.body;
      const result = await this.service.create(dto);
      return res.status(200).json(result);
    } catch (e) {
      console.log('Error : ', e.message, e.stack);
      return res.status(500).json({ stack: e.stack, message: e.message });
    }
  }

  async removeById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await this.service.removeById(id);
      return res.status(200).json(result);
    } catch (e) {
      console.log('Error : ', e.message, e.stack);
      return res.status(500).json({ stack: e.stack, message: e.message });
    }
  }

  async removeMany(req: Request, res: Response) {
    try {
      const ids = JSON.parse(req.query.ids as string) || [];
      const result = await this.service.removeMany(ids);
      return res.status(200).json(result);
    } catch (e) {
      console.log('Error : ', e.message, e.stack);
      return res.status(500).json({ stack: e.stack, message: e.message });
    }
  }
}

export default BaseController;
