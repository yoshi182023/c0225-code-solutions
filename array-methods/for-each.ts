const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((item) => {
  console.log('In order', item);
});

values.forEach((item, index, array) => {
  const reverseIndex = array.length - 1 - index;
  console.log('Reverse order', array[reverseIndex]);
});
