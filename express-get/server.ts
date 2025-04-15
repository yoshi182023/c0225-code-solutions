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
//  handle GET requests at the path '/api/countries' that responds in JSON format
// with an array
// first end point
app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
     SELECT "countryId", "countries"."name", count(*) as "cities"
FROM "countries"
JOIN "cities" USING ("countryId")
GROUP BY "countryId", "countries"."name";
    `;
    const result = await db.query(sql);
    console.log(result);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});
app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (isNaN(Number(cityId))) {
      throw new ClientError(400, 'city Id must be a positive integer');
    }
    // .* select every column in the cities table
    const sql = `
  SELECT "cities".*, "countries"."name" as "country"
FROM "countries"
JOIN "cities" USING ("countryId")
where "cityId" =$1;
    `;
    const result = await db.query(sql, [cityId]);
    console.log(result);
    const city = result.rows[0];

    if (!city) {
      throw new ClientError(404, `city ${cityId} not found`);
    }
    res.json(city);
  } catch (err) {
    next(err);
  }
});
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
