SELECT 
	COUNT(DISTINCT songs.song_id) AS cancoes,
  COUNT(DISTINCT artists.artist_id) AS artistas,
  COUNT(DISTINCT albums.album_id) AS albuns 
FROM SpotifyClone.songs, SpotifyClone.artists, SpotifyClone.albums;