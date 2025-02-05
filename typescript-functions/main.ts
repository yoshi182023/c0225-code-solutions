const convertMinutesToSeconds = (minutes: number): number => {
  return minutes * 60;
};

const convertMinutesToSecondsTest: number = convertMinutesToSeconds(5);
const TestTwo: number = convertMinutesToSeconds(10);
console.log('Convert Minutes to Seconds Test 1:', convertMinutesToSecondsTest);
console.log('Convert Minutes to Seconds Test 2:', TestTwo);

const greet = (name: string): string => `Hey ${name}!`;

const greetBeavis: string = greet('Beavis');
console.log('greet Test 1:', greetBeavis);
const SpongeBob: string = greet('SpongeBob');
console.log('greet Test 2:', SpongeBob);

const getArea = (width: number, height: number): number => width * height;

const getAreaTest1: number = getArea(17, 42);
console.log('getArea Test:', getAreaTest1);
// Make sure you create an interface that represents the person object
// that will be getting passed into the function
interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (fullName: Person): string => fullName.firstName;

const testFirstName: string = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstName Test:', testFirstName);

const getLastElement = (last: Array<any>): any[] => {
  return last[last.length - 1];
};
const testGetLast1: any[] = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('Test getLastElement1:', testGetLast1);
const testGetLast2: any[] = getLastElement([true, true, false, true]);
console.log('Test getLastElement2:', testGetLast2);
const callOtherFunction = (otherFunction: Function, params: any): any => {
  return otherFunction(params);
};
const Test1: any[] = callOtherFunction(convertMinutesToSeconds, 10);
const Test2: any[] = callOtherFunction(getLastElement, [
  'hello',
  'Goodbye',
  'Aloha',
]);

console.log('Test callOtherFunction function:', Test1);
console.log('Test2 callOtherFunction function:', Test2);
