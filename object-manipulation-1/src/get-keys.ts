/* exported getKeys */
const getKeys = (object): unknown[] => {
  const result: unknown[] = []; // Explicitly define the type of `result`
  for (const key in object) {
    result.push(key);
  }
  return result;
};
