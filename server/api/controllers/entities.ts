import { Service } from 'typedi';
import BaseController from './base';
import EntitiesService from '../../services/entities';
import Entity from '../../models/entity';
import { IEntity } from '../../interfaces/entity';

@Service()
export default class EntitiesController extends BaseController<EntitiesService, typeof Entity, IEntity> {
  constructor(service: EntitiesService) {
    super(service);
  }
}
