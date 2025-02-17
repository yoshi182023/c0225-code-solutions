'use strict';
/* exported compact */
// function compact(array: unknown[]): unknown[] {
//   const result = [];
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (
//       array[i] != NaN &&
//       array[i] != undefined &&
//       array[i] > 0 &&
//       array[i] != null &&
//       array[i] != ' '
//     ) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

function compact(array) {
  const result = []; // Create an empty array to store truthy values
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      // Check if the current element is truthy
      result.push(array[i]); // Add truthy elements to the result array
    }
  }
  return result; // Return the new array
}
