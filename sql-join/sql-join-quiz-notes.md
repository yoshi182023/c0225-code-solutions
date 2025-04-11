# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  **a foreign key in one table pointing to a primary key in another table,** creates a one-to-many relationship between the two tables.
  column in one table reference primary key in another table
- How do you join two SQL tables? (Provide at least two syntaxes.)
  join clause is a way of combining data from two different database tables into one result set.

  select \*
  from "tableA"
  join "tableB" using （“ID”）

if they don't have the same name, you can use **on**

- How do you temporarily rename columns or tables in a SQL statement?
  alias column names using the "as" keyword.
- How do you create a one-to-many relationship between two tables?
  using a foreign key
- How do you create a many-to-many relationship between two tables?
  "join table": Many-to-many relationships can be modeled by introducing a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table.

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
