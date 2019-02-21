/* DATABASE INITIALIZING CODE.

---------------------------------------------------------*/

CREATE DATABASE JS_project;

USE JS_project;

CREATE TABLE projects (
	project_id INT(3) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	project_key VARCHAR(3) NOT NULL,
	project_name VARCHAR(30) NOT NULL,
	project_img VARCHAR(30) NOT NULL,
	project_url VARCHAR(30) NOT NULL
);

INSERT INTO drumkit (event_key, sound_name, sound_datakey, sound_url)
VALUES
('a', 'clap', 65, 'clap.wav'),
('s', 'hihat', 83, 'hihat.wav'),
('d', 'kick', 68, 'kick.wav'),
('f', 'openhat', 70, 'openhat.wav'),
('g', 'boom', 71, 'boom.wav'),
('h', 'ride', 72, 'ride.wav'),
('j', 'snare', 74, 'snare.wav'),
('k', 'tom', 75, 'tom.wav'),
('l', 'tink', 76, 'tink.wav')
 ;