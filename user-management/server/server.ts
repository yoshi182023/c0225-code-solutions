/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me! */
import 'dotenv/config';
import pg from 'pg';
import argon2, { hash } from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ClientError, errorMiddleware, authMiddleware } from './lib/index.js';

type User = {
  userId: number;
  username: string;
  hashedPassword: string;
};
type Auth = {
  username: string;
  password: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const hashKey = process.env.TOKEN_SECRET;
if (!hashKey) throw new Error('TOKEN_SECRET not found in .env');

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    // throw new Error('Not implemented');
    /* TODO:
     * Delete the "Not implemented" error.
     * Hash the user's password with `argon2.hash()` (note that this method is async)
     * Insert the user's "username" and "hashedPassword" into the "users" table.
     * Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
     * Catch any errors.
     *
     * Hint: Insert statements can include a `returning` clause to retrieve the inserted row(s).
     */
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning "userId", "username", "createdAt"
    `;
    const params = [username, hashedPassword];
    const result = await db.query<User>(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
  } catch (err) {
    console.error('Registration error:', err); // 添加日志
    next(err);
  }
});

app.post('/api/auth/sign-in', authMiddleware, async (req, res, next) => {
  try {
    const { username, password } = req.body as Partial<Auth>;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }
    // throw new Error('Not implemented');  Delete the "Not implemented" error.
    /* TODO:
     */
    const sql = `
    select * from "users"
    where "username"= $1
    `;
    const result = await db.query<User>(sql, [username]);
    // Query the database to find the "userId" and "hashedPassword" for the "username".
    const user = result.rows[0];
    if (!user) throw new ClientError(401, 'not authorized');
    //  If no user is found,  throw a 401: 'invalid login' error.
    // If a user is found,
    //  *   confirm that the password included in the request body matches the "hashedPassword" with `argon2.verify()`
    if (!(await argon2.verify(user.hashedPassword, password))) {
      throw new ClientError(401, 'not authorized'); // If the password does not match,  throw a 401: 'invalid login' error.
    }
    //  If the password does match,
    //  *     Create a payload object containing the user's "userId" and "username".
    //  *     Create a new signed token with `jwt.sign()`, using the payload and your TOKEN_SECRET
    //  *       (see `hashKey` above).
    const payload = { userId: user.userId, username: user.username };
    const token = jwt.sign(payload, hashKey);
    res.json({ user: payload, token });
    //*     Send the client a 200 response containing an object with 2 keys, "user" and "token",
    // where "user"'s value is the payload and "token"'s value is the token.
  } catch (err) {
    next(err);
  }
});
// if this matches, it will first execute the auth middleware and then execute my function
app.get('/api/todos', authMiddleware, async (req, res, next) => {
  try {
    const sql = `
      select *
        from "todos"
        where "userId" = $1
        order by "todoId"
    `;
    const result = await db.query(sql, [req.user?.userId]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/todos', authMiddleware, async (req, res, next) => {
  try {
    const { task, isCompleted = false } = req.body;
    if (!task || typeof isCompleted !== 'boolean') {
      throw new ClientError(400, 'task and isCompleted are required');
    }
    const sql = `
      insert into "todos" ("userId", "task", "isCompleted")
        values ($1, $2, $3)
        returning *
    `;
    const params = [req.user?.userId, task, isCompleted];
    const result = await db.query(sql, params);
    const [todo] = result.rows;
    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
});

app.put('/api/todos/:todoId', authMiddleware, async (req, res, next) => {
  try {
    const todoId = Number(req.params.todoId);
    if (!Number.isInteger(todoId) || todoId < 1) {
      throw new ClientError(400, 'todoId must be a positive integer');
    }
    const { task, isCompleted } = req.body;
    if (typeof isCompleted !== 'boolean') {
      throw new ClientError(400, 'isCompleted (boolean) is required');
    }
    const sql = `
      update "todos"
        set "updatedAt" = now(),
            "isCompleted" = $1,
            "task" = $2
        where "todoId" = $3 and "userId" = $4
        returning *
    `;
    const params = [isCompleted, task, todoId, req.user?.userId];
    const result = await db.query(sql, params);
    const [todo] = result.rows;
    if (!todo) {
      throw new ClientError(404, `cannot find todo with todoId ${todoId}`);
    }
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
