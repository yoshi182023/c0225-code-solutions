-- SAFE COUNTRY DELETION SCRIPT
BEGIN;

-- 1. First check if country exists and view its details
SELECT * FROM countries WHERE "countryId" = 70;

-- 2. Check for dependent cities (prevent RESTRICT constraint violation)
SELECT COUNT(*) AS dependent_cities FROM cities WHERE "countryId" = 70;

-- 3a. OPTION 1: If you want to DELETE all dependent cities first
-- DELETE FROM cities WHERE "countryId" = 70;

-- 3b. OPTION 2: If you want to REASSIGN cities to another country (e.g., countryId 1)
-- UPDATE cities SET "countryId" = 1 WHERE "countryId" = 70;

-- 4. Now delete the country (only works after handling dependencies)
DELETE FROM countries
WHERE "countryId" = 70
RETURNING "countryId", name;

-- 5. Verify results
SELECT * FROM countries WHERE "countryId" = 70;
SELECT COUNT(*) AS remaining_cities FROM cities WHERE "countryId" = 70;

-- ROLLBACK; -- Run this first to test without permanent changes
-- COMMIT;  -- Uncomment when ready to actually execute
