<?php

    //destination.PHP

    include "../db_connection.php";

    $sql_querie = "SELECT * FROM drumkit";
    
    $db_result = $conn->query($sql_querie);

    foreach ($db_result as $row) {
        echo '<section class="drumkit" data-key="' . $row['sound_datakey'] . '">' .
             '<kbd>' . $row['event_key'] . '</kbd>' .
             '<span class="sound">' . $row['sound_name'] . '</span>' .
             '</section>';
}

$conn = null;