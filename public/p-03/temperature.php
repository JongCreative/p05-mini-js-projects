<!--START HEAD & HEADER.
------------------------------------------------------------>
    <?php include "../templates/head.php"; ?>

    <title>temperature converter</title>
    <link rel="stylesheet" href="../css/styles-temperature.css">

    <?php //include "../templates/header.php"; ?>
    
<!--END HEAD & HEADER.
------------------------------------------------------------>
<main class="positioning positioning-main">
	<div class="container container-clock">
        <article class="wrapper wrapper-badge">
            klokje
        </article>
        <article class="wrapper wrapper-clock">
            <span id="hour"></span>
            <span id='minutes'></span>
            <span id='seconds'></span>
        </article>
    </div>
</main>

<!--START FOOTER.
------------------------------------------------------------>
	<script src="../js/script-clock.js"></script>
	<?php include "../templates/footer.php"; ?>

<!--END FOOTER.
------------------------------------------------------------>