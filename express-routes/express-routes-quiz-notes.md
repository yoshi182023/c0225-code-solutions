# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  Operation Method
  Create POST
  Read GET
  Update PUT
  Delete DELETE
  **Not required**
- What is Express middleware?
  Express middleware as **an array of functions** held by the Express process.
- What is Express middleware useful for?
  When Express receives an HTTP request, it passes the request to each of the functions in its middleware array one at a time, starting with the first one.
- How do you mount a middleware with an Express application?
  Functions are added to the middleware array by "mounting" the middleware functions (mounting just means calling a special function, like use or get, which adds the function to the middleware array).
  APP.use()
- **Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?**
  req (Request)
  res (Response)
  next (Next Function)
- **How do you specify and retrieve route parameters?**
  :
  req.params:

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
