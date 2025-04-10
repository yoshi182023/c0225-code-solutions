SELECT
    a."line1" AS address_line1,
    c."name" AS cityname,
    a."district",
    co."name" as countryname
FROM
    "addresses" a  -- 添加了别名a
JOIN
    "cities" c ON a."cityId" = c."cityId"  -- 移除了错误的分号
JOIN
    "countries" co ON c."countryId" = co."countryId";  -- 使用英文引号
