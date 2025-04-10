-- select "countryId",
--        count("cityId") as "numberofCity"
--   from "cities"
--   group by "countryId";

SELECT
    COUNT(*) AS "totalCities",
    c."name" AS "country"
FROM
    "cities" ct
JOIN
    "countries" c USING ("countryId")
GROUP BY
    c."countryId", c."name"
ORDER BY
    "totalCities" DESC;
