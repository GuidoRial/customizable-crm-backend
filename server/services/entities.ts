import { Service } from 'typedi';
import CRUDBase from './CRUDBase';
import entity from '../models/entity';
import { IEntity } from '../interfaces/entity';
@Service()
export default class EntitiesService extends CRUDBase<typeof entity, IEntity> {
  constructor() {
    super(entity, 'entities');
  }
}
