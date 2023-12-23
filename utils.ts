/**
 * Applies a series of functions to a value in a left-to-right order.
 *
 * @param fns - An array of functions to be applied.
 * @returns A function that takes a value and applies the functions in the specified order.
 */
export const pipe = (fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x);
