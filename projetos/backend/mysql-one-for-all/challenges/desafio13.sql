SELECT
  CASE
    WHEN users.age <= 30 THEN 'Até 30 anos'
    WHEN users.age <= 60 THEN 'Entre 31 e 60 anos'
    ELSE 'Maior de 60 anos'
  END AS faixa_etaria,
  COUNT(DISTINCT users.user_id) AS total_pessoas_usuarias,
  COUNT(favourites.song_id) AS total_favoritadas
FROM SpotifyClone.users LEFT JOIN SpotifyClone.favourites ON users.user_id = favourites.user_id
GROUP BY faixa_etaria
ORDER BY
	CASE
		WHEN 'Até 30 anos' THEN 1
    WHEN 'Entre 31 e 60 anos' THEN 2
    ELSE 3
  END;