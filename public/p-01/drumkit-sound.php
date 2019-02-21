<?php

    //destination.PHP

    include "../../db_connection.php";

    $sql_querie = "SELECT * FROM drumkit";
    
    $db_result = $conn->query($sql_querie);

    foreach ($db_result as $row) {
        echo '<audio data-key="' . $row['sound_datakey'] . '" src="sounds/' . $row['sound_url'] . '"></audio>';
}

$conn = null;