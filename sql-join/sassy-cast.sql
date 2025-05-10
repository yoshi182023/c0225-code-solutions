SELECT
    actors."firstName" AS first_name,
    actors."lastName" as last_name
FROM
    "actors"
JOIN
    "castMembers" cM ON actors."actorId" = cM."actorId"
JOIN
    "films" ON cM."filmId" = films."filmId"
WHERE
    films."title" = 'Jersey Sassy';
