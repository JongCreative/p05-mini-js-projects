<?php

/* OPEN NEW CONNECTION VIA PDO
   THIS TO CREATE A NEW DATABASE AND TABLE WITH STRUCTURE.
---------------------------------------------------------*/

require "config.php";

try {
	$connection = new PDO("mysql:host=$host", $username, $password, $options);
	$sql = file_get_contents("data/init-preview.sql");
	$connection->exec($sql);
	
	echo "Database and table $dbname created successfully.";
} catch(PDOException $error) {
	echo $sql . "<br>" . $error->getMessage();
}