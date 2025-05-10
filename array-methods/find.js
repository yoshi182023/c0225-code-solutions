'use strict';
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];
const products = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];
// find the first object inside of the users array that has an id of 2,
// and assign it to a variable user.
const user = users.find(({ id }) => id === 2);
// Log the variable to the console.
console.log(user);
// Using find, find the first object inside of the products array that has a price greater than 900,
// and assign it to a variable expensiveProduct. Log the variable to the console.
