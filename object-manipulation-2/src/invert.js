'use strict';
/* exported invert */
// const invert = (source: object): object => {
//   const result = {};
//   for (const key in source) {
//     result[source[key]] = source[key];
//   }
//   return result;
// };
const invert = (source) => {
  const result = {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      result[source[key]] = key;
    }
  }
  return result;
};
