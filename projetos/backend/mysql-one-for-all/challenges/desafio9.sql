SELECT COUNT(history.user_id) AS musicas_no_historico
FROM SpotifyClone.history JOIN SpotifyClone.users ON history.user_id = users.user_id
WHERE users.user_name LIKE 'Barbara Liskov';