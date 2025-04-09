-- Insert a new actor with only the required fields (firstName and lastName)
-- The actorId and updatedAt will be auto-generated
INSERT INTO "actors" ("firstName", "lastName")
VALUES ('Tom', 'Hanks')
RETURNING *;
