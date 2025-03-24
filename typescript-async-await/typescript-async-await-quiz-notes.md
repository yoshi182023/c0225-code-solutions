# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  The **await** keyword is used to indicate that the JavaScript Runtime should **"wait" or "pause" until the asynchronous function completes.**

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  With async and await, the code is read sequentially.shines when asynchronous functions are chained
- When do you use `async`?

- When do you use `await`?
  We use the await keyword to **pause execution until the Promise returned** is either fulfilled or rejected.

When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
if it not asynchronous
it has not effect

- How do you handle errors with `await`?
  **`try catch` block**

- What do `try`, `catch` and `throw` do? When do you use them?
  attempt to execute code in the block
  exception got thrown
  then catch block will catch the exception
  **anytime we use await keyword**

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

access the promise in the **pending** stage
it will execute the next block of code without the data
await forces asynchronous operations to be completed in series. This is necessary if the result of the **next operation depends on the result of the last one,** but if that's not the case then something like Promise.all() will be more performant.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

Promise.then

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
