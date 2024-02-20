export const deepGet = (obj: Object, keys: Array<any>) =>
  keys.reduce(
    (xs: Object, x) =>
      xs &&
      xs[x as keyof Object] !== null &&
      xs[x as keyof Object] !== undefined
        ? xs[x as keyof Object]
        : null,
    obj
  );
