<?php

    //destination.PHP

    include "../db_connection.php";

    $sql_querie = "SELECT * FROM preview";
    
    $db_result = $conn->query($sql_querie);

    foreach ($db_result as $row) {
        echo 
             '<article class="wrapper wrapper-timeline">' .
             '<img class="project_img" src="images/'. $row['project_img'] . '">'.
             '</article>' .
             '<article class="wrapper wrapper-timeline">' .
             '<section class="card timeline-name">name: ' . $row['project_name'] . '</section>' .
             '<section class="card timeline-description">' . nl2br(nl2br($row['project_description'])) . '</section>' .
             '<section class="card timeline-link">' .
             '<a class="timeline-linkPage" href="'. $row['project_url'] . '">project_url</a>' .
             '</section>' .
             '<section class="card timeline-start">started: <br/>' .$row['project_start'] . '</section>' .
             '<section class="card timeline-finnished">finnished: <br/>' .$row['project_finnished'] . '</section>' .
             '</article>';
}

$conn = null;