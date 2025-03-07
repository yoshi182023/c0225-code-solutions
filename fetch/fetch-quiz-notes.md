# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  Fetch returns a **promise that resolves to the Response object representing the outcome of the request.** This object provides methods to further process the response (e.g., .json(), .text(), etc.).
- What is the default request method used by `fetch()`?
  The **default request method for fetch is GET.**
  This means if no method is specified, fetch will perform a GET request.

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  To specify the request method for a fetch call, you must **pass an options object as the second argument to fetch()**, setting the method property to 'GET', 'POST', 'PUT', 'DELETE', etc., like so:**fetch(url, { method: 'POST' });**

- How does `fetch` report errors?
  Fetch considers a promise resolved even if the server responds with an error status code (like 404 or 500). It only rejects the promise on network failures or if anything prevented the request from completing. **To handle HTTP errors, you need to check the response.ok property** or the **status code** directly within the response handling logic.

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
