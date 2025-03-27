# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?
  read from a database,we will have data in an array.
  display multiple similar components from a collection of data

- Why is it important for React components to be data-driven?
  The only difference among those list items is their contents, their data.
- What `Array` method is commonly used to create a list of React components?
  filter() and map()
- Why do components in a list need to have unique keys?
  Each child in a list should have a unique “key” prop.
  **JSX elements directly inside a map() call always need keys!** Keys tell React which array item each component corresponds to,so that it can match them up later.

- What is the best value to use as a "key" prop when rendering lists?
  Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
  Keys must not change or that defeats their purpose! Don’t generate them while rendering.
  The key attribute accepts either string or number and internally convert it as string type.

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
