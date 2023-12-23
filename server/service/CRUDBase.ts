import mongoose, { ObjectId, FilterQuery } from 'mongoose';
import { Service } from 'typedi';
type Populate = {
  path: string;
  select?: string;
  populate?: Populate;
};
@Service()
class CRUDBase<T extends mongoose.Model<I>, I> {
  constructor(
    public model: T,
    public name: string
  ) {}

  public create = {
    one: async (object: Partial<I>) => {
      return this.model.create({ ...object });
    },
    many: async (objects: Partial<I>[]) => {
      return this.model.insertMany(objects);
    },
  };

  public read = {
    distinctValues: async (field: string) => {
      return this.model.distinct(field);
    },
    all: async () => {
      return this.model.find().lean();
    },
    one: {
      by: async (q: FilterQuery<I> = {}) => {
        return this.model.findOne(q)
      },
      byId: async (id: string) => this.model.findById(id).lean(),
    },
    many: {
      by: async (q: FilterQuery<I> = {}) => {
        return this.model.find(q).lean();
      },
      byId: async (ids: string[]) => {
        return this.model.find({ _id: { $in: ids } }).lean();
      },
    },
  };

  public update = {
    one: {
      by: async (q: FilterQuery<I> = {}, update: Partial<I>) => {
        return this.model.updateOne(q, { $set: { ...update } });
      },
      byId: async (id: string, update: Partial<I>) => this.model.updateOne({ _id: id }, { $set: { ...update } }),
    },
    many: {
      by: async (q: FilterQuery<I> = {}, update: Partial<I>) => {
        return this.model.updateMany(q, { $set: { ...update } });
      },
      byId: async (ids: string[], update: Partial<I>) => {
        return this.model.updateMany({ _id: { $in: ids } }, { $set: { ...update } });
      },
    },
  };

  public remove = {
    one: {
      by: async (q: FilterQuery<I> = {}) => {
        return this.model.deleteOne(q);
      },
      byId: async (id: string) => this.model.deleteOne({ _id: id }),
    },
    many: {
      by: async (q: FilterQuery<I> = {}) => {
        return this.model.deleteMany(q);
      },
      byId: async (ids: string[]) => {
        return this.model.deleteMany({ _id: { $in: ids } });
      },
    },
  };

  public utils = {
    populateFields: async (unpopulated: I | I[], populate: Populate[]) => {
      return this.model.populate(unpopulated, populate);
    },
    count: async (filter: FilterQuery<I> = {}) => {
      return this.model.countDocuments(filter);
    },
  };
}

export default CRUDBase;
