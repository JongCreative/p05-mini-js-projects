<!--START HEAD & HEADER.
------------------------------------------------------------>
    <?php include "../templates/head.php"; ?>

    <title>text to speech</title>
    <link rel="stylesheet" href="../css/styles-textToSpeech.css">

    <?php //include "../templates/header.php"; ?>
    
<!--END HEAD & HEADER.
------------------------------------------------------------>
<main class="positioning positioning-textToSpeech">
	<div class="container container-textToSpeech">
        <article class="wrapper wrapper2">
            Text to speech
        </article>
        <article class="wrapper wrapper-textToSpeech">
            <form class="form-textToSpeech">
                <article class="textToSpeech Speech-1">
                    <textarea class="textToSpeech text-input" placeholder="Tell me anything.....&#128521;" autofocus></textarea>
                </article>
                <article class="textToSpeech Speech-2">
                    <label class="textToSpeech label-speech" for="rate">Rate</label>
                    <section class="textToSpeech value-rate">1</section>
                    <input class="textToSpeech rate" type="range" min="0.5" max="2" value="1" step="0.1">
                </article>
                <article class="textToSpeech Speech-3">
                    <label class="textToSpeech label-speech" for="pitch">Pitch</label>
                    <section class="textToSpeech value-pitch">1</section>
                    <input class="textToSpeech pitch" type="range" min="0" max="2" value="1" step="0.1">
                </article>
                <article class="textToSpeech Speech-4">
                    <select class="textToSpeech voice-select"></select>
                </article>
                <article class="textToSpeech Speech-5">
                    <button class="textToSpeech btn">Speak It</button>
                </article>
            </form>
        </article>
    </div>
</main>

<!--START FOOTER.
------------------------------------------------------------>
	<script src="../js/script-textToSpeech.js"></script>
	<?php include "../templates/footer.php"; ?>

<!--END FOOTER.
------------------------------------------------------------>