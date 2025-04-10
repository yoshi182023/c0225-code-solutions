-- Update all NC-17 films to G rating
UPDATE films
SET rating = 'G',
WHERE "rating" = 'NC-17'
RETURNING *
