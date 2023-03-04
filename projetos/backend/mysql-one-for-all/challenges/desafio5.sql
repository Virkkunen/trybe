SELECT
	songs.song_name AS cancao,
  COUNT(history.song_id) as reproducoes
FROM SpotifyClone.songs JOIN SpotifyClone.history ON songs.song_id = history.song_id
GROUP BY songs.song_name
ORDER BY reproducoes DESC, songs.song_name ASC
LIMIT 2;