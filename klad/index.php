<!--START HEAD & HEADER.
------------------------------------------------------------>
	<?php include "templates/head.php"; ?>
	
	<title>mini JS projects</title>
	<link rel="stylesheet" href="css/styles-index2.css">

	<?php include "templates/header.php"; ?>

<!--END HEAD & HEADER.
------------------------------------------------------------>
<main class="positioning positioning-main">
	<div class="container container-timeline">
		<article class="positioning-timeline">
			<!-- <article class="wrapper wrapper-timeline1"> -->
				<h1 class="title">Responsive Slider Timeline</h1>
			<!-- </article> -->
		</article>
		<article class="positioning-timeline">
			<?php //include "Load-miniProjects.php"; ?>
			<div class="innerContainer-timeline inner-timeline1">
				<article class="wrapper wrapper-timeline wrapper-timeline1">
					<section class="timeline1">
						<img class="project_img" src="images/p-01.jpg">
					</section>
					<section class="timeline1">
						<div class="project project_start">started <br/>2019-02-18</div>
						<div class="project project_finnished">finnished <br/>2019-02-18</div>
					</section>
				</article>
				<article class="wrapper wrapper-timeline wrapper-timeline2">
					<section class="project project_name">name drumkit</section>
					<section class="project project_description">dfdszf</section>
					<section class="project project_url">
						<a class="timeline-linkPage" href="index.php?project_id=' . $row['prodject_id'] . '">project_url</a>
					</section>
				</article>
			</div>
		</article>
	</div>
	<div class="container container-timeline2">
		<article class=" wrapper-timeline wrapper-timeline2">
			<button class="btn-time btn-prev">&#8679;</section>
			<button class="btn-time btn-pagination">&#8226;</section>
			<button class="btn-time btn-next">&#8681;</section>
		</article>
	</div>
</main>

<!--START FOOTER.
------------------------------------------------------------>
	<script src="js/script-index3.js"></script>
	
	<?php include "templates/footer.php"; ?>

<!--END FOOTER.
------------------------------------------------------------>