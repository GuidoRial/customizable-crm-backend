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
};
@Service()
class CRUDBase<T extends mongoose.Model<I>, I> {
  @EventDispatcher() public eventDispatcher: EventDispatcherInterface;
  constructor(
    public model: T,
    public name: string,
  ) {}

  private serviceEvents = events[this.name];

  public emitEvent(path: string) {
    const event = _.get(this.serviceEvents, path);
    if (event) this.eventDispatcher.dispatch(event);
  }

  public async getBy(q: FilterQuery<I>) {
    return this.model.findOne(q).lean();
  }

  public async getById({
    id,
    populate,
  }: {
    id: string;
    populate?: Populate[];
  }) {
    this.emitEvent("read.one.byId");
    const data = await this.model.findById(id).lean();
    return this.populateFields(data as I, populate);
  }

  public async getMany({
    q,
    populate,
  }: {
    q: Record<string, any>;
    populate?: Populate[];
  }) {
    this.emitEvent("read.many.by");
    const items = await this.model.find(q).lean();
    return this.populateFields(items as I[], populate);
  }

  public async getFields(field: string) {
    return this.model.find().select(field).lean();
  }

  public async createOne(object: Partial<I> | object) {
    this.emitEvent("create.one");
    return this.model.create({ ...object });
  }

  public async createMany(objects: Partial<I>[]) {
    this.emitEvent("create.many");
    return this.model.insertMany(objects);
  }

  public async updateOneById(id: string, update: Partial<I>) {
    this.emitEvent("update.one.byId");
    return this.model.updateOne({ _id: id }, { $set: { ...update } });
  }

  public async updateManyById(ids: string[], update: Partial<I>) {
    this.emitEvent("update.many.byId");
    return this.model.updateMany(
      { _id: { $in: ids } },
      { $set: { ...update } },
    );
  }

  public async deleteOneById(id: string) {
    this.emitEvent("delete.one.byId");
    return this.model.deleteOne({ _id: id });
  }

  public async deleteManyById(ids: string[]) {
    this.emitEvent("delete.many.byId");
    return this.model.deleteMany({ _id: { $in: ids } });
  }

  public async populateFields(unpopulated: I | I[], populate: Populate[] = []) {
    if (!populate.length) return unpopulated;
    return this.model.populate(unpopulated, populate);
  }
}

export default CRUDBase;
