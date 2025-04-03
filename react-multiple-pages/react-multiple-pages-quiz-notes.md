# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? **URL does not change**
  How does a user expect the URL to change as they navigate through a browser app?
  **URL in the address bar is changed to indicate the new page.**

- What NPM package can be used to make navigating a React app behave as users expect?
  **react-router-dom**
  **original**
- Which React Router component(s) can be used to set up your app's navigation?

- How does React Router match the browser URL to one of your app's React components?
  compare what's in the URL bar to match path in the URL compoents

- What is the purpose of React Router's `Outlet` component?
  If you want a header or footer (or side bar) in your app, you can use React Router's nested routes with an Outlet. The header component gets the base route (such as "/") and each route that will use the header gets nested inside the base route.

- What React component is used to statically navigate to another page? **link**
  What HTML element does it render to?
  to a anchor tag <a>

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  **useParams**

- What React Router hook is used to navigate programmatically?

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
