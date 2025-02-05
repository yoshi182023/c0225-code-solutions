'use strict';
const convertMinutesToSeconds = (minutes) => {
  return minutes * 60;
};
const convertMinutesToSecondsTest = convertMinutesToSeconds(5);
const TestTwo = convertMinutesToSeconds(10);
console.log('Convert Minutes to Seconds Test 1:', convertMinutesToSecondsTest);
console.log('Convert Minutes to Seconds Test 2:', TestTwo);
const greet = (name) => `Hey ${name}!`;
const greetBeavis = greet('Beavis');
console.log('greet Test 1:', greetBeavis);
const SpongeBob = greet('SpongeBob');
console.log('greet Test 2:', SpongeBob);
const getArea = (width, height) => width * height;
const getAreaTest1 = getArea(17, 42);
console.log('getArea Test:', getAreaTest1);
const getFirstName = (fullName) => fullName.firstName;
const testFirstName = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstName Test:', testFirstName);
const getLastElement = (last) => {
  return last[last.length - 1];
};
const testGetLast1 = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('Test getLastElement1:', testGetLast1);
const testGetLast2 = getLastElement([true, true, false, true]);
console.log('Test getLastElement2:', testGetLast2);
const callOtherFunction = (otherFunction, params) => {
  return otherFunction(params);
};
const Test1 = callOtherFunction(convertMinutesToSeconds, 10);
const Test2 = callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']);
console.log('Test callOtherFunction function:', Test1);
console.log('Test2 callOtherFunction function:', Test2);
