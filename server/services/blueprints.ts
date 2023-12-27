import { Service } from 'typedi';
import CRUDBase from './CRUDBase';
import Blueprint from '../models/blueprint';
import { IBlueprint } from '../interfaces/blueprint';
@Service()
export default class BlueprintsService extends CRUDBase<typeof Blueprint, IBlueprint> {
  constructor() {
    super(Blueprint, 'blueprints');
  }
}
