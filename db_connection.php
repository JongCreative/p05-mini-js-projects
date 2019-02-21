<?php

//DB_CONNECTION.PHP

$servername = "localhost";
$username = "root";
$password = "";
$database = "js_project";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully: <br>"; 
    //echo "<br>"; 
    }
catch(PDOException $e)
    {
    //echo "Connection failed: " . $e->getMessage();
    }
    
?>