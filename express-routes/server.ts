import express from 'express';

const app = express();
// app.use mount a middleware
app.use((req, res, next) => {
  // console.log('Hello, World!');
  // console.log('The date is', new Date());
  const currentDate = new Date().toISOString(); // ISO format (e.g., "2025-04-15T12:34:56.789Z")
  console.log(`[${currentDate}] ${req.method} ${req.path}`);
  next(); // Pass control to the next middleware, which is "Get" /
});

// get method, Route handlers(req, res, next)
app.get('/', (req, res) => {
  res.send(' homepage!'); // send a response
});

app.get('/notes', (_req, res) => {
  res.send('Got notes.');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params; // Extract noteId from URL
  // Return the value in your response.
  res.send(`Note ID received: ${noteId}`);
});

// 404 Handler (for unmounted routes)
app.use((req, res) => {
  res.status(404).send('404 NOT FOUND');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
