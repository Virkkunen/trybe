CREATE TABLE SpotifyClone.favourites(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  song_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (song_id) REFERENCES songs(song_id),
  PRIMARY KEY (id, user_id, song_id)
) engine = InnoDB;

INSERT INTO SpotifyClone.favourites (user_id, song_id)
VALUES
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'ALIEN SUPERSTAR')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Como Nossos Pais')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Feeling Good')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Robert Cecil Martin'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "Don't Stop Me Now")),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Ada Lovelace'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'BREAK MY SOUL')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Ada Lovelace'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'ALIEN SUPERSTAR')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Martin Fowler'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'O Medo de Amar é o Medo de Ser Livre')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Martin Fowler'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "Don't Stop Me Now")),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Sandi Metz'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Feeling Good')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Sandi Metz'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "VIRGO'S GROOVE")),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Christopher Alexander'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "Don't Stop Me Now")),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Judith Butler'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'O Medo de Amar é o Medo de Ser Livre')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Jorge Amado'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'ALIEN SUPERSTAR'));