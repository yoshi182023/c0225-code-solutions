# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static
- How does setting `position: relative` on an element affect document flow?
  **Modifies the position of an element while keeping it within the document flow. This means the element still occupies space but can be shifted from its normal position using the top, right, bottom, and left properties.**
  **doesn't do anything.**
- How does setting `position: relative` on an element affect where it appears on the page?

  once the positioned element has taken its place in the normal flow, you can then modify its final position, including making it overlap other elements on the page

- How does setting `position: absolute` on an element affect document flow?
  An absolutely positioned element no longer exists in the normal document flow. Instead, it sits on its own layer separate from everything else.
- How does setting `position: absolute` on an element affect where it appears on the page?
  going to move according to the closest parent

- How do you constrain an absolutely positioned element to a containing block?
  given its parent a position property other than static, most commonly relative.
- What are the four box offset properties?
  top,bottom,left, right

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
