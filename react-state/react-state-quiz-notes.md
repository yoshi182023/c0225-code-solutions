# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Version 16.8 of React introduced React Hooks for **controlling state** in React. Hooks are **special functions** that allow components to have access to state and other React features.
  hooks are used to add state into a component that will be persisted across component calls and used to schedule component re-renders.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  **The function name must start with use followed by an uppercase letter**
  **Hooks can only be called by React components and other hooks**
  All hooks in a component must always be called at the top level of a component, and in the same order
  This means you cannot call hooks in nested functions or conditional statements

- What is the purpose of state in React?
  state allows React to store any values that will need to persist between component re-renders, and lets React know when it needs to schedule a component re-render.
- Why can't we just maintain state in a local variable?

- What two actions happen when you call a `state setter` function? used to update the state.
  **Re-render when the state updated: When you update the component state using the state setter function, the componen't state automatically queues for a render.**
  passing two things to the useState hook: the initial value, and the data type.
- When does the local `state variable` get updated with the new value?

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
