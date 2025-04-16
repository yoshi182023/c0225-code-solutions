import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
// Add JSON body parsing middleware
app.use(express.json());

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});
app.post('/api/actors', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
      throw new ClientError(400, 'first and last name required');
    }

    const sql = `
    insert into "actors"("firstName","lastName")
    values($1,$2)
    returning *`;
    const result = await db.query(sql, [firstName, lastName]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  const { firstName, lastName } = req.body;
  const { actorId } = req.params;
  if (isNaN(Number(actorId))) {
    throw new ClientError(400, 'actor id must be an integer');
  }
  if (!firstName || !lastName) {
    throw new ClientError(400, 'first and last name required');
  }
  try {
    const sql = `
    update "actors"
    set "firstName" = $1, "lastName" = $2
    where actorId = $3
    returning *`;
    const result = await db.query(sql, [firstName, lastName, actorId]);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, 'id required!');
    }
    res.json(actor);
  } catch (err) {
    next(err);
  }
});
app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (Number.isNaN(+actorId)) {
      throw new ClientError(400, 'actor id must be an integer');
    }
    const sql = `
      DELETE FROM "actors"
  WHERE "actorId" = $1
  RETURNING *;`;
    const result = await db.query(sql, [actorId]);
    const actor = result.rows[0];
    if (!actor) {
      throw new ClientError(404, `Actor with ID ${actorId} not found`);
    }
    res.sendStatus(204); // No Content (successful deletion)
  } catch (err) {
    next(err);
  }
});
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
