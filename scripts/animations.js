// Fade In page info
$(document).ready(function () {
	$("main").fadeOut(1).fadeIn(1000);
});

// Hero
$(".hero img").hover(function () {
	$(this).css("filter", $(this).css("filter") === "brightness(1)" ? "brightness(0.90)" : "brightness(1)");
});

// Button Increase size
$(".card-body .btn").hover(
	function () {
		$(this).css("transform", "scale(1.15)");
		$(this).addClass("btn-md");
	},
	function () {
		$(this).css("transform", "scale(1)");
		$(this).removeClass("btn-md");
	}
);
