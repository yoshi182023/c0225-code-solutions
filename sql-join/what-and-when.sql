SELECT 
    films."releaseYear",
    genres."name" AS genre_name
FROM 
    "films" 
JOIN 
    "filmGenre" fg ON films."filmId" = fg."filmId"
JOIN 
    "genres" ON fg."genreId" = genres."genreId"
WHERE 
    films."title" = 'Boogie Amelie';