<?php

/* CONFIGURATION FOR DATABASE CONNECTION.

---------------------------------------------------------*/

$host       = "localhost";
$username   = "root";
$password   = "";
$dbname     = "jsProject";
$dsn        = "mysql:host=$host;dbname=$dbname";
$options    = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
              );