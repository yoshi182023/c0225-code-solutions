/* exported tail */
function tail(array: unknown[]): unknown[] {
  const result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
