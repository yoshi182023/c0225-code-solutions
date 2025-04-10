SELECT
    p.amount,
    c."firstName" as customer_first_name,
    c."lastName" as customer_last_name
FROM
    payments p
JOIN
    customers c ON p."customerId" = c."customerId"
ORDER BY
    p.amount DESC
LIMIT 10;
