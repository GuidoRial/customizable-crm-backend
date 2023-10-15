import mongoose, { Document, Model, ObjectId } from "mongoose";
import { Service } from "typedi";

@Service()
class CRUDBase<T extends Model<I & Document>, I extends Document> {
  constructor(public model: T) {}

  async getAll() {
    return this.model.find({});
  }

  async getOne(q: object) {
    return this.model.findById(q).lean();
  }

  async findOne(q: object) {
    return this.model.findOne(q).lean();
  }

  async getFieldValues(field: string) {
    return this.model.distinct(field);
  }

  async findById(id: string) {
    return this.model.findById(id).lean();
  }

  async count(filter: object) {
    return this.model.count(filter);
  }

  async remove(q: object) {
    return this.model.deleteOne(q);
  }

  async removeById(id: string) {
    return this.model.deleteOne({ _id: id });
  }

  async removeMany(ids: string[]) {
    return this.model.deleteMany({ _id: { $in: ids } });
  }

  async updateById(id: string | ObjectId, update: object) {
    return this.model.updateOne({ _id: id }, { $set: { ...update } });
  }

  async update(q: object, update: object) {
    return this.model.updateOne(q, { $set: { ...update } });
  }

  async create(object: object) {
    return this.model.create({ ...object, deleted: false });
  }
}

export default CRUDBase;
