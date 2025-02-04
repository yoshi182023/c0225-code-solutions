const width: number = 10;
const height: number = 5;

const area: number = width * height;

console.log('value of area:', area);
console.log('type area:', typeof area);

const bill: number = 30;
const payment: number = 50;

const change: number = payment - bill;

console.log('Value of change:', change);
console.log('Type of change:', typeof change);
const quizzes: number = 85;
const midterm: number = 90;
const final: number = 88;

const grade: number = (quizzes + midterm + final) / 3;

console.log('Value of grade:', grade);
console.log('Type of grade:', typeof grade);

const firstName: string = 'Mia';
const lastName: string = 'Gong';

const fullName: string = firstName + ' ' + lastName;
console.log('Value of fullName:', fullName);
console.log('Type of fullName:', typeof fullName);

const headCount: number = 300;

const isSparta: boolean = headCount === 300;

console.log('Value of isSparta:', isSparta);
console.log('Type of isSparta:', typeof isSparta);

let motto: string = fullName;

motto += ' is the GOAT';

console.log('Value of motto:', motto);
console.log('Type of motto:', typeof motto);
