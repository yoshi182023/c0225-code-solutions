# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  insert
  select
  update
  delete

- How do you add a row to a SQL table?
  An SQL insert statement
  **insert into** "table name" values (xxxxx)

- How do you add multiple rows to a SQL table at once?

  Data rows can be batch inserted into a database table by specifying more than one **tuple of values, separated by commas**

- How do you update rows in a database table?

  update "table name"
  set "column name" = value, "column name2" = value,....

  include a **where** clause in your update statements to only target specific rows:

- How do you delete rows from a database table?
  delete
  from "products"
  where "productId" = 24
  returning \*;

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  target specific rows to delete by including a where clause
  otherwise DELETED EVERYTHING FROM THE TABLE!

- How do you accidentally delete or update all rows in a table?
  missing a **where** clause

- How do you get back the modified row without a separate `select` statement?
  return
- Why did you get an error when trying to delete certain films?

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
