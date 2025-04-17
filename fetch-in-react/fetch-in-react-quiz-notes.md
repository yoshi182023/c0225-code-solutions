# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  The Fetch API
- What two things need to be done to properly handle HTTP request errors? Why?
  try catch and response.ok or the status code 200

- How can `useEffect` be used to load data for a component?
  useEffect , declare a async function,call fetch

- How do you use `useEffect` to load component data just once when the component mounts?
  empty dependcy array
- How do you use `useEffect` to load component data every time the data key changes?
  put the id in the dependency array

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  React Query and Vercel SWR.

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
