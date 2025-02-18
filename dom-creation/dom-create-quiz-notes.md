# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  No,still need appending.

- How do you add an element as a child to another element?
  appendChild: This method appends a node as the last child of a node.

- What do you pass as the arguments to the `element.setAttribute()` method?
  **It will take in 2 arguments, the first being a string of the attribute you are trying to create or update, like class, id, type, etc. The 2nd argument is the value that you would like to assign to that attribute.**

- **What steps do you need to take in order to insert a new element into the page?**
  Create element: A new DOM element must be created using a method such as document.createElement
  Set attributes and properties: Optionally, set attributes (eg., id, class, src) and properties (e.g., textContent, value) of the newly created element
  Append to parent: Append the newly created element to its parent node in the DOM using a method such as appendChild().
- What is the `textContent` property of an element object for?
  get or set the text content of an element and its descendants.

- Name two ways to set the `class` attribute of a DOM element.
  Using className，Using classList

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  reusability,
  abstraction,
  maintainability,
  Testability.

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
