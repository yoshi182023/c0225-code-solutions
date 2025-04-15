import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const app = express();
// Configure PostgreSQL numeric type handling
pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);
// only create ONE pool for your whole server.仅为整个服务器创建一个池
// Note the database name at the end of the connection string.
// creating a connection pool
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});
// Test database connection on startup
db.query('SELECT 1')
  .then(() => console.log('Database connected successfully'))
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });
app.use(express.json());

// GET all films ordered by replacement cost (high to low)
app.get('/api/films', async (req, res, next) => {
  try {
    // the purpose of back` ` allows multiple lines, make the code more readable
    const sql = `
      SELECT *
      FROM "films"
      ORDER BY "replacementCost" DESC
      limit 5
    `;
    // got the sql
    // send to database
    const result = await db.query(sql);
    // response will be in this result
    // res.send
    res.json(result.rows); // an array of object, each object is a film
  } catch (err) {
    next(err);
  }
});

// GET single film by filmId
app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params; // film id is in request params
    if (!filmId || isNaN(Number(filmId))) {
      // 也可以写 ！Number
      throw new ClientError(400, 'filmId must be a number');
    }
    // parseInt ()
    // Number()
    // + 这三个完全时一样的
    const sql = `
      SELECT *
      FROM "films"
      WHERE "filmId" = $1
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0]; // expect only 1 item
    // res.send(result.rows[0]);
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    // res.json(film);
    res.send(film);
  } catch (err) {
    next(err);
  }
});

// PUT update film title
app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const { title } = req.query;

    if (!filmId || isNaN(Number(filmId))) {
      throw new ClientError(400, 'filmId must be a number');
    }
    if (!title) {
      throw new ClientError(400, 'title is required');
    }
    // First check if film exists
    // const checkSql = `
    //   SELECT "filmId"
    //   FROM "films"
    //   WHERE "filmId" = $1
    // `;
    // const checkResult = await db.query(checkSql, [filmId]);
    // if (checkResult.rows.length === 0) {
    //   throw new ClientError(404, `film ${filmId} not found`);
    // }

    // Update the film
    const updateSql = `
      UPDATE "films"
      SET "title" = $1
      WHERE "filmId" = $2
      RETURNING *
    `; // if the film does not exist, no row got effected, empty array
    const params = [title, filmId];
    const result = await db.query(updateSql, params);
    const updatedFilm = result.rows[0];
    // res.json(updatedFilm);
    if (!updatedFilm) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(updatedFilm);
  } catch (err) {
    next(err);
  }
});
// end points need to before the error Middleware
app.use(errorMiddleware);
app.listen(8080, () => {
  console.log('listening on port 8080');
});
