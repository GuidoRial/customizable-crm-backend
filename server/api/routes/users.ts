import { Router } from 'express';
import controllers from '../controllers';
import Container from 'typedi';
const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  const controller = Container.get(controllers.users);

  route.get('/:id', controller.getById.bind(controller));

  route.put('/:id', controller.update.bind(controller));
};
