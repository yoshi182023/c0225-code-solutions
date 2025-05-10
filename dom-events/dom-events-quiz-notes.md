# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  allow us understanding the program

- What is the purpose of events and event handling?

- Are all possible parameters required to use a JavaScript method or function?

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener
- What is a callback function?
  **A callback function is a function passed into another function as an argument. In the context of event handling, callback functions are used to respond to events triggered by user interactions or other asynchronous actions.**

- What object is passed into an event listener callback when the event fires?
  **event object**

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

  **event.target is going to refer to the element that is responsible for firing the event.**

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  the first one , notice the callback function is not being called.
  second one the the callback function is being called

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
