import mongoose, { ObjectId, FilterQuery } from "mongoose";
import { Service } from "typedi";
import events from "../subscribers/events";
import {
  EventDispatcher,
  EventDispatcherInterface,
} from "../decorators/eventDispatcher";
import _ from "lodash";

type Populate = {
  path: string;
  select?: string;
  populate?: Populate;
};
@Service()
class CRUDBase<T extends mongoose.Model<I>, I> {
  @EventDispatcher() public eventDispatcher: EventDispatcherInterface;
  constructor(
    public model: T,
    public name: string,
  ) {}

  private serviceEvents = events[this.name];

  private emitEvent(path: string) {
    const event = _.get(this.serviceEvents, path);
    if (event) this.eventDispatcher.dispatch(event);
  }

  public create = {
    one: async (object: Partial<I>) => {
      this.emitEvent("create.one");
      return this.model.create({ ...object });
    },
    many: async (objects: Partial<I>[]) => {
      this.emitEvent("create.many");
      return this.model.insertMany(objects);
    },
  };

  public read = {
    distinctValues: async (field: string) => {
      this.emitEvent("read.distinctValues");
      return this.model.distinct(field);
    },
    all: async () => {
      this.emitEvent("read.all");
      return this.model.find().lean();
    },
    field: async (field: string) => {
      return this.model.find().select(field).lean();
    },
    one: {
      by: async (q: Record<string, any> = {}) => {
        this.emitEvent("read.one.by");
        return this.model.findOne(q);
      },
      byId: async (id: string) => {
        this.emitEvent("read.one.byId");
        return this.model.findById(id).lean();
      },
    },
    many: {
      by: async (q: Record<string, any> = {}, populate: Populate[] = []) => {
        this.emitEvent("read.many.by");
        const items = await this.model.find(q).lean();
        if (!populate.length) return items;
        return this.model.populate(items, populate);
      },
      byId: async (ids: string[]) => {
        this.emitEvent("read.many.byId");
        return this.model.find({ _id: { $in: ids } }).lean();
      },
    },
  };

  public update = {
    one: {
      by: async (q: FilterQuery<I> = {}, update: Partial<I>) => {
        this.emitEvent("update.one.by");
        return this.model.updateOne(q, { $set: { ...update } });
      },
      byId: async (id: string, update: Partial<I>) => {
        this.emitEvent("update.one.byId");
        return this.model.updateOne({ _id: id }, { $set: { ...update } });
      },
    },
    many: {
      by: async (q: FilterQuery<I> = {}, update: Partial<I>) => {
        this.emitEvent("update.many.by");
        return this.model.updateMany(q, { $set: { ...update } });
      },
      byId: async (ids: string[], update: Partial<I>) => {
        this.emitEvent("update.many.byId");
        return this.model.updateMany(
          { _id: { $in: ids } },
          { $set: { ...update } },
        );
      },
    },
  };

  public delete = {
    one: {
      by: async (q: FilterQuery<I> = {}) => {
        this.emitEvent("delete.one.by");
        return this.model.deleteOne(q);
      },
      byId: async (id: string) => {
        this.emitEvent("delete.one.byId");
        return this.model.deleteOne({ _id: id });
      },
    },
    many: {
      by: async (q: FilterQuery<I> = {}) => {
        this.emitEvent("delete.many.by");
        return this.model.deleteMany(q);
      },
      byId: async (ids: string[]) => {
        this.emitEvent("delete.many.byId");
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
