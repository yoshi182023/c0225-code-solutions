'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
// Using filter, create an array that contains only the even numbers in the numbers array,
// then log it to the console.
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);
// Using filter, create an array that contains all names that do not include a 'D' or 'd',
// then log it to the console.
const noD = names.filter((name) => !name.includes('D') && !name.includes('d'));
console.log(noD);
