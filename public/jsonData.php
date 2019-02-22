<?php

    //destination.PHP

    include "../db_connection.php";

    $sql_querie = "SELECT * FROM preview";
    
    $db_result = $conn->query($sql_querie);
    $wrapperArray = array();

    foreach ($db_result as $row) {

        $innerArray = array(
            $row['project_id'],
            $row['project_key'],
            $row['project_name'],
            $row['project_description'],
            $row['project_img'],
            $row['project_url'],
            $row['project_start'],
            $row['project_completed']
        );
        
        //var_dump($innerArray);
        
        array_push($wrapperArray, $innerArray);
        //print_r($wrapperArray);
}

echo json_encode($wrapperArray);

$conn = null;