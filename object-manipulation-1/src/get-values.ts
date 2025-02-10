/* exported getValues */
const getValues = (object): unknown[] => {
  const result: unknown[] = []; // Explicitly define the type of `result`
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
};
