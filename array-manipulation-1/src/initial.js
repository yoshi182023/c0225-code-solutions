'use strict';
/* exported initial */
function initial(array) {
  if (array.length === 0) {
    return []; // Return an empty array if the input array is empty
  }
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i]); // Add each element except the last to the result array
  }
  return result;
}
