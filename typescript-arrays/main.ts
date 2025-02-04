// In main.ts, create an array literal containing the strings 'red', 'white', and 'blue'
// assign it to a new variable named colors.
const colors: string[] = ['red', 'white', 'blue'];

// Log each value of the colors array to the console with proper labels
console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);

// 3 Create a template literal which interpolates each of the values inside of the colors array,
// and log the string to the console
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

// 4  Assign 'green' to index 2 of the colors array
colors[2] = 'green';

// 5 Create another template literal interpolating the updated values of the colors array
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

// 6 Log the value of the colors array to the console
console.log('value of colors:', colors);

// 7 Log the typeof colors to the console
console.log('typeof colors:', typeof colors);

// Create a new array literal containing four strings and assign it to a new variable named students.
// Each string should be a person's name.
const students: string[] = ['Alice', 'Bob', 'Charlie', 'Mia'];

// 2 Use dot notation to access the length property of the students array
// and assign it to a new variable named numberOfStudents.
const numberOfStudents: number = students.length;

// 3 Log the value of numberOfStudents to the console within a string
// like in the example log output below.

console.log(`There are ${numberOfStudents} students in the class.`);

// 4 Subtract 1 from numberOfStudents to get the last index
const lastIndex: number = numberOfStudents - 1;

// 5 Use lastIndex to access the last element of the students array
const lastStudent: string = students[lastIndex];

// 6 Log the value of the lastStudent variable to the console within a string
console.log(`The last student in the array is ${lastStudent}.`);

// Log the value of the students array to the console
console.log('Value of students:', students);

// Log the typeof students to the console.
// Note that the type is object and that the name of the data type is not logged.
console.log('typeof students:', typeof students);
