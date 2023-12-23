import { Service } from 'typedi';
import UserModel from '../models/User';
import CRUDBase from './CRUDBase';
import { IUser } from '../interfaces/IUser';
@Service()
export default class UserService extends CRUDBase<typeof UserModel, IUser> {
  constructor() {
    super(UserModel, 'user');
  }
}
