/* exported toObject */
const toObject = (keyValuePair): object => {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const result = {}; // Create a new object
  result[key] = value;
  return result;
};
