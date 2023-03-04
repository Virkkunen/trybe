SELECT 
	users.user_name AS pessoa_usuaria,
  IF(MAX(YEAR(history.play_date)) >= 2021, "Ativa", "Inativa") AS status_pessoa_usuaria
FROM SpotifyClone.users JOIN SpotifyClone.history ON users.user_id = history.user_id
GROUP BY users.user_name
ORDER BY users.user_name;