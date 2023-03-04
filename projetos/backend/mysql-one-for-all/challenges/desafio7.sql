SELECT
  artists.artist_name AS artista,
  albums.album_name AS album,
  COUNT(following.artist_id) AS pessoas_seguidoras
FROM SpotifyClone.artists 
JOIN SpotifyClone.albums ON artists.artist_id = albums.artist_id
JOIN SpotifyClone.following ON artists.artist_id = following.artist_id
GROUP BY artists.artist_name, albums.album_name
ORDER BY pessoas_seguidoras DESC, artists.artist_name, albums.album_name;