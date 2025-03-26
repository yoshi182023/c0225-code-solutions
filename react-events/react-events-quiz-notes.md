# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  event usually rely on some interaction
- What is an "event handler"? Which component declares the handler?

- How do you pass an event handler to a React component?
  **Props**
  event listener methods
- What is the naming convention for event handlers?
  It is customary for event handler functions in React to start with a handle prefix followed by an uppercase letter.
- What is an "event handler prop"? Which component declares the prop?
  **The child defines a custom event by adding an event handler prop to its list of props** When an event happens, the child calls the prop (which actually calls the event handler that the parent passed to this prop). This allows the child to communicate with its parent, and pass the parent any data it requires.
  **event handler prop is a function.**
- What are some custom event handler props a component may wish to define?
  onSave,onCancel,
- What is the naming convention for custom event handler props?

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
