SELECT 
	users.user_name as pessoa_usuaria,
  COUNT(history.song_id) as musicas_ouvidas,
  ROUND(SUM(songs.duration)/60,2) as total_minutos
FROM SpotifyClone.users JOIN SpotifyClone.history ON history.user_id = users.user_id
JOIN SpotifyClone.songs ON history.song_id = songs.song_id
GROUP BY users.user_name
ORDER BY users.user_name;