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