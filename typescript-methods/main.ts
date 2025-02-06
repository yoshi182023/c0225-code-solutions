// Create a new array containing four strings that are
// the names of your favorite superheroes and assign it to a new variable named heroes.
const heroes: string[] = ['Spider-Man', 'Iron Man', 'Black Widow', 'Thor'];
console.log(heroes);
// Call the random() method of the Math object and
// assign its return value to a new variable named randomNumber.
let randomNumber: number = Math.random();
console.log('randomNumber before:', randomNumber);
// Multiply your random number by the length property of your heroes object
// and assign the result back to the randomNumber variable.
randomNumber = randomNumber * heroes.length;
console.log('randomNumber after:', randomNumber);
// Call the floor() method of the Math object and pass in randomNumber as an argument.
// Assign its return value to a new variable named randomIndex.
const randomIndex: number = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
// Using bracket notation, access the heroes array at randomIndex
// and assign the result to a new variable named randomHero.
const randomHero: string = heroes[randomIndex];
// Log the value of randomHero to the console.
console.log('Random Hero:', randomHero);
// Create a new array containing three objects.
const library: Array<{ title: string; author: string }> = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
];
// Each object represents a book and should have two properties:
// title and author.

// Call the pop() method of the library and assign its return value to a new variable named lastBook.
const lastBook = library.pop();
// Log the value of lastBook to the console.
console.log('lastBook:', lastBook);
// Call the shift() method of the library and assign its return value to a new variable named firstBook.
const firstBook = library.shift();
// Log the value of firstBook to the console.
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
// Call the push() method of the library and pass your js book as an argument.
// You can ignore the method's return value for now.
library.push(js);
console.log(library);
// Call the unshift() method of the library as pass your css book as an argument.
library.unshift(css);
console.log(library);
// Call the splice() method of the library and delete one book from the middle (index 1).
// You can ignore the method's return value for now.
library.splice(1, 1);
// Log the value of the library array to the console. Only the JavaScript and CSS books should remain.
console.log('the value of the library array after splice:', library);
// Create a new string containing your full name (including a space) and assign it to a new variable named fullName.
const fullName: string = 'Mia Gong';
// Call the split() method of fullName and pass a space character (' ') as an argument.
// Assign the method's return value to a new variable named firstAndLastName.
const firstAndLastName: string[] = fullName.split(' ');
// Log the value of firstAndLastName to the console.
console.log('First and Last Name:', firstAndLastName);
// Access the first element of firstAndLastName and assign it to a variable named firstName.
const firstName: string = firstAndLastName[0];
// Call the toUpperCase() method of firstName and assign its return value to a new variable named sayMyName.
const sayMyName: string = firstName.toUpperCase();
// Log the value of sayMyName to the console.
console.log('Say My Name:', sayMyName);
// create an object that represents an employee and should have three properties:
// name, age, position.. Assign the object to a new variable named employee.
const employee = {
  name: 'John Doe',
  age: 30,
  position: 'Software Engineer',
};
// Call the keys() method of Object and pass the employee variable as an argument.
// Assign the method's return value to a new variable named employeeKeys.

const employeeKeys = Object.keys(employee);

// Log the value of employeeKeys to the console
console.log('Employee Keys:', employeeKeys);

//  Get the values of the employee object
const employeeValues = Object.values(employee);

// Log the value of employeeValues to the console
console.log('Employee Values:', employeeValues);

// Get the key-value pairs of the employee object
const employeePairs = Object.entries(employee);

//  Log the value of employeePairs to the console
console.log('Employee Pairs:', employeePairs);
