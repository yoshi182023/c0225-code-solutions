-- Insert multiple languages and return all generated data
INSERT INTO languages (name)
VALUES
  ('HTML'),
  ('CSS'),
  ('JavaScript')
RETURNING *;
