// define an interface named Book.
// This interface should include isbn as a string, title as a string, and author as a string.
interface Book {
  isbn: string;
  title: string;
  author: string;
}
// give the bookshelf variable a type annotation of an array of Book objects.

const bookshelf: Book[] = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

// log the name of the author of the second book to the console with a descriptive label.
console.log('name of the author of the 2 book:', bookshelf[1].author);
// In the bookshelf.ts file, log the ISBN of the first book to the console with a descriptive label.
console.log('name of the ISBN of the 1 book:', bookshelf[0].isbn);

// In the bookshelf.ts file, log the title of the third book to the console with a descriptive label.
console.log('name of the title of the 3 book:', bookshelf[2].title);
