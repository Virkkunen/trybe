SELECT
	albums.album_name AS album,
  COUNT(songs.song_id) as favoritadas
FROM SpotifyClone.albums 
JOIN SpotifyClone.songs ON albums.album_id = songs.album_id
JOIN SpotifyClone.favourites ON songs.song_id = favourites.song_id
GROUP BY albums.album_name
ORDER BY favoritadas DESC
LIMIT 3;