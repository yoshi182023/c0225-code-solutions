-- Update country name from 'United States' to 'Murica'
UPDATE countries
SET
  country = 'Murica'
WHERE "name"= 'United States'
RETURNING *
