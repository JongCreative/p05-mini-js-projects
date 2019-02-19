/* DATABASE INITIALIZING CODE.

---------------------------------------------------------*/

CREATE DATABASE JS_project;

USE JS_project;

CREATE TABLE drumkit (
	sound_id INT(3) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	even_key VARCHAR(3) NOT NULL,
	sound_name VARCHAR(30) NOT NULL,
	sound_datakey INT(3) NOT NULL,
	sound_url VARCHAR(30) NOT NULL
);