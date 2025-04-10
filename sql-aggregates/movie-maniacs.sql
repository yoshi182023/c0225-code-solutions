SELECT
 c."firstName" AS first_name,
    c."lastName" AS last_name,
    SUM("payments"."amount") AS total_paid
    FROM
    "customers" c
    JOIN
    "payments" using("customerId")
    GROUP BY
    c."customerId", c."firstName", c."lastName"
ORDER BY
    total_paid DESC;
