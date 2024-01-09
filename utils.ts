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

export const getIds = (ids: string) => ids.split(",") || [];

export const CRUDGenerator = (route: Router, controller: any) => {
  route.post("/", controller.create.bind(controller));

  route.get("/", controller.read.bind(controller));

  route.get("/:id", controller.read.bind(controller));

  route.put("/:id", controller.update.bind(controller));

  route.put("/", controller.update.bind(controller));

  route.delete("/:id", controller.delete.bind(controller));

  route.delete("/", controller.delete.bind(controller));
};
export const convert_to_snake_case = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join("_")
    .toLowerCase();
