# typescript-loops-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of a loop?
  Loops allow you to execute a block of code multiple times.
  **In some cases, using a loop can be more efficient than repeating code, especially when the number of repetitions is large or variable.**

- What is the purpose of a **condition** expression in a loop?
  **Loops, in combination with conditional statements, allow you to control the flow of your program in complex ways.**

- What does "iteration" mean in the context of loops?
  "iteration" refers to a single execution of the loop's body. Each time the loop runs through its code block, it completes one iteration.

- _When_ does the **condition** expression of a `while` loop get evaluated?
  **The while loop evaluate the conditional expression and begin it's iterations at an initial value.**

- _When_ does the **initialization** expression of a `for` loop get evaluated?
  The initialization expression of a for loop is evaluated once, at the very beginning of the loop, before any iterations occur.
  **The initial expression only runs once before the loop begins to iterate**

- _When_ does the **condition** expression of a `for` loop get evaluated?
  **The loop will continue to run as long as the conditional expression evaluates to true.**

- _When_ does the **final** expression of a `for` loop get evaluated?
  The final expression is typically used to increment the variable defined in the initial expression.
  **The final expression gets evaluated after each iteration. Once the code inside the loops code block finishes, the final expression will kick in, and then move to the conditional expression.This allows the code to have a way to "move forward" in the loop.**

- Besides a `return` statement, which exits its entire function block, which keyword exits a loop before its **condition** expression evaluates to `false`?

The break statement can be used in any loop (for, while, for..in, etc.). **When a break statement is encountered, the program breaks out of the loop** and continues executing the code that follows the loop (if any). **It does not terminate the function, just the current loop.**

- What does the `++` increment operator do?
  It is used to increase the value of a variable by 1.

- How do you iterate through the keys of an object?
   **for .. in loop**
  for (const key in person) {

}

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
