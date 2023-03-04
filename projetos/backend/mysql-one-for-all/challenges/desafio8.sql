SELECT
	artists.artist_name AS artista,
  albums.album_name AS album
FROM SpotifyClone.artists JOIN SpotifyClone.albums ON artists.artist_id = albums.artist_id
WHERE artists.artist_name LIKE 'Elis Regina';