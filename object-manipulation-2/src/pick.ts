/* exported pick */
function pick(source: object, keys: Array<string>): object {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (typeof source[keys[i]] !== 'undefined') {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
