# videos.sql
# manages the sql for the videos table;

CREATE DATABASE IF NOT EXISTS swish;

DROP TABLE swish.videos;
CREATE TABLE swish.videos (
  id INT AUTO_INCREMENT,
  name VARCHAR(256) NOT NULL,
  image VARCHAR(256) NOT NULL,
  video VARCHAR(256) NOT NULL,
  PRIMARY KEY (id)
);

LOAD DATA LOCAL 
  INFILE 'data/videos.csv'
  INTO TABLE swish.videos
  FIELDS TERMINATED BY ','
  IGNORE 1 ROWS
  (name, image, video);
