/* exported omit */

function omit(source: object, keys: Array<string>): object {
  const result = {};

  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }

  return result;
}
