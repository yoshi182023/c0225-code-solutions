# react-props-and-expressions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are props in React?
  The **props object** in React is the means of **passing arguments to React components** when they are called. components often use data that is passed in as arguments and stored in parameters to perform their functionality.

- How do you declare and access props in a component?
  declare types for each of your components that receive props.
  declare TypeScript types for a component is to declare a **type named Props**
- How do you pass props to a component?
  Spread operator: Helps in passing props down into a component

// in es 5
<SomeComponent someData={this.props.someData} dispatch={this.props.dispatch} />

// in es6
<SomeComponent {...this.props} />

- How do you write JavaScript expressions in JSX?
  JSX also allows developers to use JavaScript expressions within JSX by using curly {} braces.

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
