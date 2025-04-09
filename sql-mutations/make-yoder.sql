-- Update actor with ID 15 and return the modified row
UPDATE actors
SET
  "firstName" = 'Baby',
  "lastName" = 'Yoda',
  "updatedAt" = NOW()  -- Explicitly update the timestamp
WHERE "actorId" = 15
RETURNING *;
