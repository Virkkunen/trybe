SELECT
	artists.artist_name AS artista,
  CASE
	  WHEN COUNT(favourites.id) >= 5 THEN 'A'
    WHEN COUNT(favourites.id) >= 3 THEN 'B'
    WHEN COUNT(favourites.id) >= 1 THEN 'C'
    ELSE '-'
	END AS ranking
FROM SpotifyClone.artists
JOIN SpotifyClone.albums ON artists.artist_id = albums.artist_id
JOIN SpotifyClone.songs ON albums.album_id = songs.album_id
LEFT JOIN SpotifyClone.favourites ON songs.song_id = favourites.song_id
GROUP BY artists.artist_name
ORDER BY COUNT(favourites.id) DESC, artists.artist_name;