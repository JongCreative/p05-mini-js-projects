<!--START HEAD & HEADER.
------------------------------------------------------------>
	<?php include "../templates/head.php"; ?>

	<title>drumkit</title>
	<link rel="stylesheet" href="../css/styles-drumkit.css">

	<?php include "../templates/header.php"; ?>
	
<!--END HEAD & HEADER.
------------------------------------------------------------>
<main class="positioning positioning-main">

	<div class="container container-keys">
		<?php //include "soundKeys.php"; ?>
		<article class="wrapper wrapper-key" data-key="65"> <!-- pressed = play  corresponding data-key audio element-->
			<kbd>A</kbd>
			<span class="sound">clap</span>
		</article>
		<article class="wrapper wrapper-key" data-key="83">
			<kbd>S</kbd>
			<span class="sound">hihat</span>
		</article>
		<article class="wrapper wrapper-key" data-key="68">
			<kbd>D</kbd>
			<span class="sound">kick</span>
		</article>
		<article class="wrapper wrapper-key" data-key="70">
			<kbd>F</kbd>
			<span class="sound">openhat</span>
		</article>
		<article class="wrapper wrapper-key" data-key="71">
			<kbd>G</kbd>
			<span class="sound">boom</span>
		</article>
		<article class="wrapper wrapper-key" data-key="72">
			<kbd>H</kbd>
			<span class="sound">ride</span>
		</article>
		<article class="wrapper wrapper-key" data-key="74">
			<kbd>J</kbd>
			<span class="sound">snare</span>
		</article>
		<article class="wrapper wrapper-key" data-key="75">
			<kbd>K</kbd>
			<span class="sound">tom</span>
		</article>
		<article class="wrapper wrapper-key" data-key="76">
			<kbd>L</kbd>
			<span class="sound">tink</span>
		</article>
	</div>
	<div class="container container-sounds">
		<audio data-key="65" src="sounds/clap.wav"></audio>
		<audio data-key="83" src="sounds/hihat.wav"></audio>
		<audio data-key="68" src="sounds/kick.wav"></audio>
		<audio data-key="70" src="sounds/openhat.wav"></audio>
		<audio data-key="71" src="sounds/boom.wav"></audio>
		<audio data-key="72" src="sounds/ride.wav"></audio>
		<audio data-key="74" src="sounds/snare.wav"></audio>
		<audio data-key="75" src="sounds/tom.wav"></audio>
		<audio data-key="76" src="sounds/tink.wav"></audio>
	</div>
</main>

<!--START FOOTER.
------------------------------------------------------------>
	<script src="../js/script-drumkit.js"></script>
	<?php include "../templates/footer.php"; ?>

<!--END FOOTER.
------------------------------------------------------------>