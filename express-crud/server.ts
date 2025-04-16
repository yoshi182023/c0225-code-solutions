/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

// create a database connection object
const db = new pg.Pool({
  // only create ONE pool for your whole server.
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable', // Note the database name at the end of the connection string.
  ssl: {
    // 如果是本地开发环境（localhost），可以禁用严格的 SSL 检查
    rejectUnauthorized: false,
  },
});
// GET /api/grades returns all rows from the grades table.
// The client should receive an array of objects.
// If there are no rows, return an empty array.

// Status codes:
// 200 if the query succeeds
// 500 if the query fails
const app = express();
app.use(express.json());
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      SELECT *
      FROM grades
      ORDER BY "gradeId"
    `;
    const result = await db.query(sql);
    console.log(result);
    // 显式声明成功状态 + 标准化数据结构
    // default is 200
    res.status(200).json(result.rows);
  } catch (err) {
    // 错误时返回不同的状态码（如500）
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // GET /api/grades/:gradeId returns the row from the grades table with the given gradeId.
    // The client should receive an object, not an array.
    // Status codes:
    // 200 if the query succeeds
    // 404 if the target grade does not exist in the database
    // 500 if the query fails
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const sql = `
      select * from "grades"
      where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const student = result.rows[0];
    if (!student) throw new ClientError(404, `Grade ${gradeId} not found`);
    // res.json(student);
    res.status(200).json(student); // 明确设置 200
  } catch (err) {
    next(err); // 数据库错误会触发 500
  }
});
// POST /api/grades - 创建新成绩
//  inserts a new grade into the grades table and returns the entire created grade.

app.post('/api/grades', async (req, res, next) => {
  try {
    console.log('Request Body:', req.body); // 添加这行

    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'name required');
    }
    if (!course) {
      throw new ClientError(400, 'course required');
    }
    if (typeof score !== 'number' || score < 0 || score > 100) {
      throw new ClientError(400, 'score must between 0 and 100 ');
    }
    const sql = `
      INSERT INTO grades ("name", "course", "score")
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const result = await db.query(sql, [name, course, score]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'No name provided');
    }
    if (!course) {
      throw new ClientError(400, 'No course provided');
    }
    if (typeof score !== 'number') {
      throw new ClientError(400, `score is not a number: ${score}`);
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, `score ${score} is not between 0 and 100`);
    }

    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
      where "gradeId" = $4
      returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    // if (!Number.isInteger(+gradeId)) {
    //   throw new ClientError(400, 'gradeId muse be a integer');
    // }
    validateGradeId(gradeId);
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *;
    `;
    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];

    if (!grade) {
      throw new ClientError(404, `grade ${gradeId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

function validateGradeId(gradeId: string) {
  if (!Number.isInteger(+gradeId)) {
    throw new ClientError(400, ` ${gradeId} must be a positive integer `);
  }
}
