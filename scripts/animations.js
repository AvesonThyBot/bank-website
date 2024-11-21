// Fade in page info
$(document).ready(function () {
	$("main").fadeOut(1).fadeIn(1000);
});

// Hero
$(".hero img").hover(function () {
	$(this).css("filter", $(this).css("filter") === "brightness(1)" ? "brightness(0.8)" : "brightness(1)");
	$(this).css("transition", "0.3s ease-in-out");
});

// Button increase size
$(".home-card").hover(
	function () {
		$(this).css("transform", "scale(1.15)");
		$(this).css("z-index", "100");
		$(this).css("transition", "0.3s ease-in-out");
	},
	function () {
		$(this).css("transform", "scale(1)");
		$(this).css("z-index", "0");
		$(this).css("transition", "0.3s ease-in-out");
	}
);

// services-card
$(".services-card > .card ").on("click", function () {
	$(this).animate({ left: "250px" });
});
