# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it is first added to the DOM and drawn on the page

- What is a React Effect?
  when it is first added to the DOM and drawn on the page

  Effects let you specify side effects that are caused by rendering itself, rather than by a particular event. **Effects 允许您指定由呈现本身而不是由特定事件引起的副作用**

- When should you use an Effect and when should you not use an Effect?
  do not use it in event handlers,
  Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.
- **When do Effects run?**

  My Effect runs after every re-render
  _and also_ if either a or b have changed since the last render [a, b];

- What function is used to declare an Effect?
  useEffect hook

- What are Effect dependencies and how do you declare them?

  The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3].

- Why would you want to clean up from an Effect?
  After your component is removed from the DOM, React will run your cleanup function.
- How do you clean up from an Effect?
  A setup function with setup code that connects to that system.
  It should return a cleanup function with cleanup code that disconnects from that system.
- When does the cleanup function run?
  when unmounted

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
