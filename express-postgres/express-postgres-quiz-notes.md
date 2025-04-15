# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  node can access to the database
- How do you tell `pg` which database to connect to?
  To tell the pg (node-postgres) library which PostgreSQL database to connect to, you configure it in the connection pool setup.
- How do you send SQL to PostgreSQL from your Express server?
  send SQL to PostgreSQL from Express using **db.query()** from the pg library, either with plain SQL strings for static queries or **parameterized queries ($1, $2) for dynamic values.**
- How do you access the rows that get returned from the SQL query?
  you access the **returned rows from an SQL query through the rows property of the result object**
- What must you always remember to put around your asynchronous route handlers? Why?
  if you don't put try/catch express don't know how to handle the error

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  A SQL injection attack is a malicious technique where attackers insert harmful SQL code into input fields to manipulate database queries, potentially stealing, altering, or deleting data. **using parameterized queries**

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
