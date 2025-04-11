import express from 'express'; // import the express function exported from the 'express' package.

// Create a new Express application object by calling the express() function and assigning its result to a variable named app.
// This app object is what Express refers to as the Express application.

const app = express();
app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});

// All your configuration of Express will use this variable.
// While you could name it anything you want, it is conventional to name it app.
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
