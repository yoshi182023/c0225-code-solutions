SELECT DISTINCT
    c."firstName" AS first_name,
    c."lastName" AS last_name
FROM
    "customers" c
JOIN
    "rentals" r ON c."customerId" = r."customerId"
JOIN
    "inventory" i ON r."inventoryId" = i."inventoryId"
JOIN
    "films" f ON i."filmId" = f."filmId"
WHERE
    f."title" = 'Magic Mallrats'
ORDER BY
    c."lastName", c."firstName";
