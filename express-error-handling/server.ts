import express from 'express';
import { errorMiddleware, ClientError } from './lib/index.js';

type Note = {
  noteId: number;
  content: string;
};

const app = express();

app.get('/api/notes', async (req, res, next) => {
  try {
    const notes = await readNotes();
    res.send(notes);
  } catch (err) {
    next(err); // pass to use(middleware)
    // console.error(err);
    // res.status(500).send({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/notes', async (req, res, next) => {
  try {
    const { content } = req.query;
    if (content === undefined) {
      // res.status(400).send({ error: 'content is required' });
      // return;
      throw new ClientError(400, 'content is required');
    }
    const note = {
      noteId: Math.floor(100 * Math.random()),
      content: String(content),
    };
    await writeNote(note);
    res.send(note);
  } catch (err) {
    // console.error(err);
    // res.status(500).send({ error: 'an unexpected error occurred' });
    next(err);
  }
});

app.put('/api/notes/:noteId', async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const { content } = req.query;
    if (noteId === undefined) {
      // res.status(400).send({ error: 'noteId is required' });
      // return;
      throw new ClientError(400, 'noteId is required');
    }
    if (content === undefined) {
      // res.status(400).send({ error: 'content is required' });
      // return;
      throw new ClientError(400, 'content is required');
    }
    const note = {
      noteId: +noteId,
      content: String(content),
    };
    await writeNote(note);
    res.send(note);
  } catch (err) {
    // console.error(err);
    // res.status(500).send({ error: 'an unexpected error occurred' });
    next(err);
  }
});

app.delete('/api/notes/:noteId', async (req, res, next) => {
  try {
    const { noteId } = req.params;
    if (noteId === undefined) {
      // res.status(400).send({ error: 'noteId is required' });
      // return;
      res.status(400).send({ error: 'noteId is required' });
      return;
    }
    await deleteNote(+noteId);
    res.send(`deleted ${noteId}`);
  } catch (err) {
    // console.error(err);
    // res.status(500).send({ error: 'an unexpected error occurred' });
    next(err);
  }
});

app.use(errorMiddleware);
// call this one with error
app.listen(8080, () => {
  console.log('listening on port 8080');
});

//* **** Mock data handling functions

async function readNotes(): Promise<Note[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve([
            { noteId: 8, content: 'Error handling middleware is great' },
            { noteId: 12, content: 'Express is easy!' },
            { noteId: 3, content: 'Simplicity itself' },
          ])
        : reject(new Error('What bad luck! Read error.'));
    }, 10);
  });
}

async function writeNote(note: Note): Promise<Note> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(note)
        : reject(new Error('What bad luck! Write error.'));
    }, 10);
  });
}

async function deleteNote(id: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() >= 0.5
        ? resolve(id)
        : reject(new Error('What bad luck! Delete error.'));
    }, 10);
  });
}
