import { Router } from 'express';

/**
 * Applies a series of functions to a value in a left-to-right order.
 *
 * @param fns - An array of functions to be applied.
 * @returns A function that takes a value and applies the functions in the specified order.
 */
export const pipe = (fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x);

export const booleanParser = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => {
      if (v === 'true') {
        return [k, true];
      } else if (v === 'false') {
        return [k, false];
      } else {
        return [k, v];
      }
    })
  );
};

export const CRUDGenerator = (route: Router, controller: any) => {
  route.get('/', controller.read.all.bind(controller)); // normal and filter

  route.get('/:id', controller.read.one.byId.bind(controller)); //

  route.post('/', controller.create.one.bind(controller)); //

  route.post('/bulk', controller.create.many.bind(controller)); //

  route.put('/:id', controller.update.one.byId.bind(controller)); //

  route.put('/', controller.update.many.by.bind(controller)); //

  route.delete('/:id', controller.delete.one.byId.bind(controller)); //

  route.delete('/', controller.delete.many.by.bind(controller));
};
