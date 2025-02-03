# typescript-primitives-and-variables-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of variables?
  Variable acting as containers for storing data values.
- How do you **declare** a variable?
  Best practice is that const should be used except when the value of the variable is expected to change.

- How do you initialize (**assign a value to**) a variable?
  The = symbol is used as the assignment operator in TypeScript. It assigns the value on its right to the variable on its left.

- What characters are allowed in variable names?
  Characters can include letters, digits, underscores, and dollar signs, but must start with a letter, $, or \_.

- What does it mean to say that variable names are "case sensitive"?

- What is the purpose of a string?
  Variable names are case-sensitive, meaning that capitalization matters. Two variables with the same name, but with different capitalization, are treated as 2 separate variables.

- What is the purpose of a number?
  Numbers in TypeScript are used to represent both integer and floating-point values.
  TypeScript has a single number type, and numbers can be written with or without decimals.

- What is the purpose of a boolean?
  Booleans in TypeScript represent one of two values: true or false. They are typically used in conditional testing where you need to decide which path of code to execute based on the truthiness of a condition.

- What does the `=` operator mean in JavaScript?
  The = symbol is used as the assignment operator.

- How do you update the value of a variable?
  Variables declared with let or var can be updated to any value, regardless of type.
  Variables declared with const cannot be reassigned.
  Update the value using a "=".

- What is the difference between `null` and `undefined`?

In JavaScript, undefined and null are two primitive values that represent the absence of a meaningful value.
They are similar but used in different contexts.
The value undefined is assigned to variables that have been declared but not initialized with a value. It represents the absence of value or "not defined".
The value null is intentionally used to represent "no value" or "empty value". It must be assigned explicitly to a variable.

- Why is it a good habit to include "labels" when you log values to the browser console?
  if you do not include "labels", it can be very confusing instead of helpful. A console log "label" is simply a short string that describes the variable or value being logged so we can debug.

- Give five examples of JavaScript primitives.
  1 undefined
  2 null
  3 boolean
  4 string
  5 number

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
