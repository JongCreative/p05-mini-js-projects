<?php

    //destination.PHP

    include "../db_connection.php";

    $sql_querie = "SELECT * FROM preview";
    
    $db_result = $conn->query($sql_querie);


    foreach ($db_result as $row) {
        echo /* include $row['project_url'] ; */
        '<article class="positioning-timeline">' .
        '<div class="innerContainer-timeline inner-timeline1">' .
        '<article class="wrapper wrapper-timeline wrapper-timeline1">' .
        '<section class="timeline1">' .
        '<a class="timeline-linkPage" href="' . $row['project_url'] . '"><img class="project_img" src="images/'. $row['project_img'] . '">' .
        '</section></a>' .
        '</article>' .
        '<article class="wrapper wrapper-timeline wrapper-timeline2">' .
        '<section class="project project_name">'. $row['project_name'] . '</section>' .
        '<section class="project project_description">'. $row['project_description'] . '</section>' .
        '<section class="project project_url">' .
        '<a class="timeline-linkPage" href="' . $row['project_id'] . '"></a>' .
        '</section>' .
        '<section class="timeline1">' .
        '<div class="project project_start">started <br/>'. $row['project_start'] . '</div>' .
        '<div class="project project_finnished">finnished <br/>'. $row['project_completed'] . '</div>' .
        '</section>' .
        '</article>' .
        '</div>' .
        '</article>' ;

}

$conn = null;
