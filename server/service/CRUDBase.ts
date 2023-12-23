import mongoose, { ObjectId, FilterQuery } from 'mongoose';
import { Service } from 'typedi';

@Service()
class CRUDBase<T extends mongoose.Model<I>, I> {
  constructor(
    public model: T,
    public name: string
  ) {}

  async getAll(q: FilterQuery<I> = {}) {
    return this.model.find(q);
  }

  async getOne(q: any) {
    return this.model.findById(q).lean();
  }

  async findOne(q: any, populate: any = []) {
    let unpopulated = await this.model.findOne(q).lean();
    let data: any;
    if (populate.length) {
      data = await this.model.populate(unpopulated, populate);
    } else {
      data = unpopulated;
    }
    return data;
  }

  async getFieldValues(field: string) {
    return this.model.distinct(field);
  }

  async getByName(name: string) {
    return this.model.findOne({ name }).lean();
  }

  async getById(id: string) {
    return this.findById(id);
  }

  async findById(id: string) {
    return this.model.findById(id).lean();
  }

  async count(filter) {
    return this.model.count(filter);
  }

  async remove(q) {
    return this.model.deleteOne(q);
  }

  async removeBy(q) {
    return this.model.deleteMany(q);
  }

  async removeById(id) {
    return this.model.deleteOne({ _id: id });
  }

  async removeMany(ids: string[]) {
    return this.model.deleteMany({ _id: { $in: ids } });
  }

  async updateById(id: string | ObjectId, update) {
    return this.model.updateOne({ _id: id }, { $set: { ...update } });
  }

  async updateMany(ids: string[], update) {
    return this.model.updateMany({ _id: { $in: ids } }, { $set: { ...update } });
  }

  async update(q, update) {
    return this.model.updateOne(q, { $set: { ...update } });
  }

  async updateByName(name: string, update) {
    return this.model.updateOne({ name }, { $set: { ...update } });
  }

  async create(object) {
    return this.model.create({ ...object });
  }

  async createMany(objects) {
    return this.model.insertMany(objects);
  }
}

export default CRUDBase;
