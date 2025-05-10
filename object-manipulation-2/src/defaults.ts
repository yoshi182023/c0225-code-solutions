/* exported defaults */
const defaults = (target: object, source: object): void => {
  for (const key in source) {
    if (!target.hasOwn(key)) {
      target[key] = source[key];
    }
  }
};
