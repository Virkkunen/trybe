-- Descomente e altere as linhas abaixo:

DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE IF NOT EXISTS SpotifyClone;

CREATE TABLE SpotifyClone.artists (
  artist_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  artist_name VARCHAR(50) NOT NULL
);

CREATE TABLE SpotifyClone.plans (
  plan_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  plan VARCHAR(50) NOT NULL,
  price DECIMAL(4, 2) NOT NULL
);

CREATE TABLE SpotifyClone.users (
  user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  plan_id INT NOT NULL,
  plan_start_date DATE NOT NULL,
  FOREIGN KEY (plan_id) REFERENCES plans(plan_id)
);

CREATE TABLE SpotifyClone.following (
  following_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  artist_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (artist_id) REFERENCES artists(artist_id),
  PRIMARY KEY (following_id, user_id, artist_id)
);

CREATE TABLE SpotifyClone.albums (
  album_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  artist_id INT NOT NULL,
  album_name VARCHAR(75) NOT NULL,
  release_year VARCHAR(4) NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
);

CREATE TABLE SpotifyClone.songs (
  song_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  album_id INT NOT NULL,
  song_name VARCHAR(75) NOT NULL,
  duration INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES albums(album_id)
);

CREATE TABLE SpotifyClone.history (
  history_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  song_id INT NOT NULL,
  play_date DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (song_id) REFERENCES songs(song_id),
  PRIMARY KEY (history_id, user_id, song_id)
);

INSERT INTO SpotifyClone.plans (plan, price)
VALUES
  ('gratuito', 0.00),
  ('familiar', 7.99),
  ('universitário', 5.99),
  ('pessoal', 6.99);

INSERT INTO SpotifyClone.users (user_name, age, plan_id, plan_start_date)
VALUES
  ('Barbara Liskov', 82, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'gratuito'), '2019-10-20'),
  ('Robert Cecil Martin', 58, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'gratuito'), '2017-01-06'),
  ('Ada Lovelace', 37, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'familiar'), '2017-12-30'),
  ('Martin Fowler', 46, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'familiar'), '2017-01-17'),
  ('Sandi Metz', 58, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'familiar'), '2018-04-29'),
  ('Paulo Freire', 19, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'universitário'), '2018-02-14'),
  ('Bell Hooks', 26, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'universitário'), '2018-01-05'),
  ('Christopher Alexander', 85, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'pessoal'), '2019-06-05'),
  ('Judith Butler', 45, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'pessoal'), '2020-05-13'),
  ('Jorge Amado', 58, (SELECT plans.plan_id FROM SpotifyClone.plans WHERE plan = 'pessoal'), '2017-02-17');

INSERT INTO SpotifyClone.artists (artist_name)
VALUES
  ('Beyoncé'),
  ('Queen'),
  ('Elis Regina'),
  ('Baco Exu do Blues'),
  ('Blind Guardian'),
  ('Nina Simone');

INSERT INTO SpotifyClone.following (user_id, artist_id)
VALUES
	((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Beyoncé')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Queen')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Elis Regina')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Robert Cecil Martin'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Beyoncé')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Robert Cecil Martin'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Elis Regina')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Ada Lovelace'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Queen')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Martin Fowler'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Baco Exu do Blues')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Sandi Metz'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Blind Guardian')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Sandi Metz'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Nina Simone')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Paulo Freire'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Nina Simone')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Paulo Freire'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Beyoncé')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Bell Hooks'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Nina Simone')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Judith Butler'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Elis Regina')),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Jorge Amado'), 
  (SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Queen'));

INSERT INTO SpotifyClone.albums (artist_id, album_name, release_year)
VALUES
  ((SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Beyoncé'), 'Renaissance', '2022'),
  ((SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Queen'), 'Jazz', '1978'),
  ((SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Queen'), 'Hot Space', '1982'),
  ((SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Elis Regina'), 'Falso Brilhante', '1998'),
  ((SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Elis Regina'), 'Vento de Maio', '2001'),
  ((SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Baco Exu do Blues'), 'QVVJFA?', '2003'),
  ((SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Blind Guardian'), 'Somewhere Far Beyond', '2007'),
  ((SELECT artists.artist_id FROM SpotifyClone.artists WHERE artist_name = 'Nina Simone'), 'I Put A Spell On You', '2012');

INSERT INTO SpotifyClone.songs (album_id, song_name, duration)
VALUES
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'Renaissance'), 'BREAK MY SOUL', 279),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'Renaissance'), "VIRGO'S GROOVE", 369),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'Renaissance'), 'ALIEN SUPERSTAR', 116),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'Jazz'), "Don't Stop Me Now", 203),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'Hot Space'), 'Under Pressure', 152),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'Falso Brilhante'), 'Como Nossos Pais', 105),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'Vento de Maio'), 'O Medo de Amar é o Medo de Ser Livre', 207),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'QVVJFA?'), 'Samba em Paris', 267),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'Somewhere Far Beyond'), "The Bard's Song", 244),
  ((SELECT albums.album_id FROM SpotifyClone.albums WHERE album_name = 'I Put A Spell On You'), 'Feeling Good', 100);

INSERT INTO SpotifyClone.history (user_id, song_id, play_date)
VALUES
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Samba em Paris'), '2022-02-28 10:45:55'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "VIRGO'S GROOVE"), '2020-05-02 05:30:35'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Barbara Liskov'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Feeling Good'), '2020-03-06 11:22:33'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Robert Cecil Martin'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Feeling Good'), '2022-08-05 08:05:17'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Robert Cecil Martin'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'O Medo de Amar é o Medo de Ser Livre'), '2020-01-02 07:40:33'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Ada Lovelace'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Feeling Good'), '2020-11-13 16:55:13'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Ada Lovelace'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "VIRGO'S GROOVE"), '2020-12-05 18:38:30'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Martin Fowler'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Samba em Paris'), '2021-08-15 17:10:10'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Sandi Metz'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Samba em Paris'), '2022-01-09 01:44:33'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Sandi Metz'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'Under Pressure'), '2020-08-06 15:23:42'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Paulo Freire'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'O Medo de Amar é o Medo de Ser Livre'), '2017-01-24 00:31:17'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Paulo Freire'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = 'BREAK MY SOUL'), '2017-10-12 12:35:20'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Bell Hooks'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "Don't Stop Me Now"), '2011-12-15 22:30:49'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Christopher Alexander'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "Don't Stop Me Now"), '2012-03-17 14:56:41'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Judith Butler'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "The Bard's Song"), '2022-02-24 21:14:22'),
  ((SELECT users.user_id FROM SpotifyClone.users WHERE user_name = 'Jorge Amado'), (SELECT songs.song_id FROM SpotifyClone.songs WHERE song_name = "ALIEN SUPERSTAR"), '2015-12-13 08:30:22');