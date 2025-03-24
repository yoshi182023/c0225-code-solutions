// Create an Array containing three object literals, representing books.
// Give each book an isbn, a title, and an author (all string).
// Log the Array of books and its type to the console (see typeof).
// Remember to label each thing you log to the console.
interface Book {
  isbn: number;
  title: string;
  author: string;
}
const newArray: Book[] = [
  { isbn: 123, title: 'Mia', author: 'Gong1' },
  { isbn: 1234, title: 'Mia', author: 'Gong2' },
  { isbn: 12345, title: 'Mia', author: 'Gong3' },
];

console.log('typeof newArray', typeof newArray);

// Use JSON.stringify to create a JSON string of your books Array
// Log the result and its type to the console (see typeof).

const json = JSON.stringify(newArray);

console.log('typeof JSON', typeof JSON);
console.log('json object:', json);

const studentJSON = `{"id": "23", "name":"MIa"} `;
console.log(typeof studentJSON);
const jsonString = `{"books":
[
  { "isbn": "123", "title": "Mia", "author": "Gong11" },
  {  "isbn": "1235", "title": "Mia", "author": "Gong12" },
  { "isbn": "1234", "title": "Mia", "author": "Gong31" }
]}`;
console.log('jS', jsonString);
console.log('typeof jsonString:', typeof jsonString);

const newParse = JSON.parse(jsonString);
console.log(newParse);
console.log(typeof newParse);
