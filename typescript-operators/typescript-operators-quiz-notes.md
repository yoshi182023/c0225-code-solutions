# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  Syntax: expr1 && expr2
  logical AND**Evaluates expr2 only if expr1 is truthy.**
  Logical OR (||) **Evaluates expr2 only if expr1 is falsy.**

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  **handle cases where variables might be null or undefined,** providing a reliable way to set default values without the pitfalls of logical OR with falsy values like 0 or ''.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The ternary operator will be applied for **concise conditional expressions**, allowing you to write less verbose conditional assignments and operations.

- **What is the `?.` (optional chaining) operator? When would you use it?**
  apply this operator to safely access properties on objects that might not exist, preventing runtime errors due to undefined or null object properties.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  **This will be used to clone or merge objects and arrays, which is extremely useful in state management scenarios**

- What data types can be spread into an array? Into an object?
  [...iterableObj, newElement] for arrays or {...obj, newProp: value} for objects.

- How does spread syntax differ from rest syntax?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
