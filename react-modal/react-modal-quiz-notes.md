# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  is used to create both modal and non-modal dialog boxes.

- How do you show and hide a modal dialog?
  **.showModal() method** to display a modal dialog and the **.close() method**
  non-modal dialog just using .show()

- How do you manipulate child components in React? **props**
  parent pass a prop to a child

- Why will that no work for the `<dialog>` element?
  **can not call things in a child**
  **.showModal() method** **.close() method** belong to dialog (child)
  can not call it method
- How do you call the dialog element's functions in React?
  useRef hook
  the only way I can reference a thing that belong to a child is useRef

- How can you render nested components or JSX elements in React?
  pass them to a children compoent

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
