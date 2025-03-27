# react-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When does React re-render a component?
  modify one of its **props**, or to modify its state with the **state setter function**.
- What are some ways to create a new, modified copy of an object?

- What is a good way to immutably add a value to an array?
  An item can be added to an Array in an immutable manner by making a copy of the Array and then pushing the item onto the copy. The method **Array.concat()** can be used for this.

- What is a good way to immutably update a value in an array?
  An item can be **updated in an Array** in an immutable manner by **copying each element in the Array into a new Array**, and then **replacing the updated item**.
- What is a good way to immutably remove a value from an array?
  An item can be **removed from an Array in an immutable manner by copying each element in the Array** into a new Array, **except the one being removed**.

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
