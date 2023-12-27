import { Router } from "express";

/**
 * Applies a series of functions to a value in a left-to-right order.
 *
 * @param fns - An array of functions to be applied.
 * @returns A function that takes a value and applies the functions in the specified order.
 */
export const pipe = (fns: Function[]) => (x: any) =>
  fns.reduce((v, f) => f(v), x);

export const booleanParser = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => {
      if (v === "true") {
        return [k, true];
      } else if (v === "false") {
        return [k, false];
      } else {
        return [k, v];
      }
    }),
  );
};

export const getIds = (ids: string) => ids.split(",") || []

export const CRUDGenerator = (route: Router, controller: any) => {
  route.post("/", controller.create.bind(controller)); // create one or many

  route.get("/", controller.read.bind(controller)); // read one or many

  route.get("/:id", controller.read.bind(controller)); // read one or many

  route.put("/:id", controller.update.bind(controller)); // update one or many

  route.put("/", controller.update.bind(controller)); // update one or many

  route.delete("/:id", controller.delete.bind(controller)); // delete one or many

  route.delete("/", controller.delete.bind(controller)); // delete one or many
};
