/* exported invert */

const invert = (source: object): object => {
  const result: { [key: string]: any } = {};
  for (const key in source) {
    if (source.hasOwn(key)) {
      result[source[key]] = key;
    }
  }
  return result;
};
