const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

// create an array from prices that contains objects with the following structure,
// then log it to the console:

const newObject = prices.map((currentValue) => {
  return {
    price: currentValue,
    salePrice: currentValue / 2,
  };
});
console.log(newObject);
