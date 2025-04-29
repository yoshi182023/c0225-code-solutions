# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  whoever the element cause the event to occur
- What is the effect of setting an element to `display: none`?
  visible hide,remove from the document flow.

- What does the `element.matches()` method take as an argument and what does it return?
  The matches method returns a boolean value - true if the element would be selected by the specified selector string, and false if it wouldn't.
- How can you retrieve the value of an element's attribute?
  getAttribute
- At what steps of the solution would it be helpful to log things to the console?
  when loop stuff
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  attach individual click event listeners to each .tab element
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  matches()

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
