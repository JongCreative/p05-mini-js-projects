/* DATABASE INITIALIZING CODE.

---------------------------------------------------------*/

/* CREATE DATABASE JS_project; */

USE JS_project;

CREATE TABLE preview (
	project_id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	project_key VARCHAR(5) NOT NULL,
	project_name VARCHAR(30) NOT NULL,
	project_description VARCHAR(200) NOT NULL,
	project_img VARCHAR(30) NOT NULL,
	project_url VARCHAR(30) NOT NULL,
    project_start DATE NOT NULL,
    project_finnished DATE NOT NULL
);

INSERT INTO preview (project_key, project_name, project_description, project_img, project_url, project_start, project_finnished)
VALUES
('p-01', 'drumkit', 'Create your own tune by pressing the corresponding keys on your keyboard', 'p-01.jpg', 'P-01.php', '2019-02-18' , '2019-02-18'),
('p-02', 'clock', 'The time is ticking you know?', 'p-02.jpg', 'p-02.php', '2019-02-19' , '2019-02-19'),
('p-03', 'temperature converter', 'Have you ever wondered what the temperature would be in &#8451;, &#8457; or &#8490;?', 'p-03.jpg', 'p-03.php', '2019-02-19' , '2019-02-19'),
('p-04', 'text to speech', 'Feeling Too lazy to read? Or would you like to be told something', 'p-04.jpg', 'p-04.php', '2019-02-20' , '2019-02-20')
 ;