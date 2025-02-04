'use strict';
const student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
};
// Use dot notation to access firstName and lastName properties of the student object
// and concatenate them into a new string.
// Assign the new string to a variable named fullName.
const fullName = `${student.firstName} ${student.lastName}`;
// Log the value of fullName to the console.
console.log('value of fullName', fullName);
// dot notation to add a property to the student object.
// The property name should be livesInIrvine and the value should be a boolean (true or false)
// indicating whether or not you live in the city of Irvine.
student.livesInIrvine = false;
console.log('value of student livesInIrvine', student.livesInIrvine);
// The property name should be previousOccupation and the value should be a string
// describing your previous occupation. "student" is ok if you've never had a job before.
// Add previousOccupation property
student.previousOccupation = 'student';
// Use dot notation to log the previousOccupation property of the student object to the console.
console.log('value of student.previousOccupation', student.previousOccupation);
// Log the value of the entire student object to the console.
console.log(student);
// Log the typeof student to the console.
// Note that the name of the interface is not logged.
// When TypeScript is compiled to JavaScript, all the typing information is lost.
console.log('type of student', typeof student);
// Using literal notation, create an object with three properties:
const vehicle = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2018,
};
// Use bracket notation to add a property to the vehicle object.
// The property name should be 'color' and the value should be a string.
vehicle['color'] = 'red';
// Use bracket notation to add a property to the vehicle object.
// The property name should be 'isConvertible' and the value should be a boolean (true or false)
// indicating whether the vehicle is a convertible.
vehicle['isConvertible'] = false;
// Use bracket notation to log the 'color' property of the vehicle object to the console.
console.log('value of vehicle["color"]:', vehicle['color']);
const vC = vehicle['isConvertible'];
// Use bracket notation to log the 'isConvertible' property of the vehicle object to the console.
console.log('value of vehicle["isConvertible"]:', vC);
console.log('value of vehicle', vehicle);
console.log('typeof vehicle', typeof vehicle);
const pet = {
  name: 'Buddy',
  kind: 'Dog',
};
// Use the delete operator to remove the name property from the pet object.
delete pet.name;
delete pet.kind;
console.log('value of pet', pet);
console.log('typeof pet', typeof pet);
