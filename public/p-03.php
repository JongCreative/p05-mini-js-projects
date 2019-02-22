<!--START HEAD & HEADER.
------------------------------------------------------------>
    <?php include "templates/head.php"; ?>

    <title>temperature converter</title>
    <link rel="stylesheet" href="css/styles-temperature.css">
    <link rel="stylesheet" href="css/styles-index2.css">

    <?php include "templates/header.php"; ?>
    
<!--END HEAD & HEADER.
------------------------------------------------------------>
<main class="positioning positioning-temperature">
	<div class="container container-temperature">
        <article class="wrapper wrapper-badge">
            converter
        </article>
        <article class="wrapper wrapper-celcius">
            <input id="celcius" type="number" placeholder="celcius">
        </article>
        <article class="wrapper wrapper-fahrenheit">
            <input id="fahrenheit" placeholder="fahrenheit">
        </article>
        <article class="wrapper wrapper-kelvin">
            <input id="kelvin" placeholder="kelvin">
        </article>
    </div>
</main>

<!--START FOOTER.
------------------------------------------------------------>
	<script src="js/script-temperature.js"></script>
	<?php include "templates/footer.php"; ?>

<!--END FOOTER.
------------------------------------------------------------>