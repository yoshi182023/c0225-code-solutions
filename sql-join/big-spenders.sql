SELECT
    p.amount,
    c."firstName" as customer_first_name,
    c."lastName" as customer_last_name
FROM
    payments as p
JOIN
    customers as c ON using ("customerId")
ORDER BY
    p.amount DESC
LIMIT 10;
