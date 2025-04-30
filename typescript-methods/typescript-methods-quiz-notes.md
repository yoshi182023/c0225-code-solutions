# typescript-methods-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  Print to the console
  output the result value

- What is a method?
  a function that is a property belongs to an object

- How is a method different from any other function?
  method belongs to object.
  normal function is a standalone function.

- How do you remove the last element from an array?
  pop method
- How do you round a number down to the nearest integer?
  Math.floor() --> always round down

- How do you generate a random number?
  Math.random(): Returns a random number between 0 and 1
- How do you delete an element from an array?
  shift(): Removes the first element from an array and returns that element.
  splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

- How do you append an element to an array?
  **push(): Adds one or more elements to the end of an array and returns the new length of the array.**

- How do you break a string up into an array?
  split(): Splits a string into an array of strings by seperating the string into substrings, using a specified separator string to determine where to make each split.

const str = 'Hello, world';
console.log(str.split(' ')); // ['Hello,', 'world']

- Do string methods change the original string? How would you check if you weren't sure?
  In JavaScript, string methods do NOT change the original string. Strings in JavaScript are immutable, meaning that once a string is created, it cannot be modified
  console.log
- Is the return value of a function or method useful in every situation?
  No
- How do you get a collection of an objects keys?

  Object.keys(): Returns an array of a given object's own property names, iterated in the same order that a normal loop would.

- How do you get a collection of an objects values?

  Object.values(): Returns an array of a given object's property values, in the same order as that provided by a for..in loop.

- How do you get a collection of both an objects keys and values?
  Object.entries(): Returns an array of a given object's properties and values.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
