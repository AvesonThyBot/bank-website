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

// ---------- Service Card Animations ----------

// Opening Animation
$(".services-card > .card .btn-read").on("click", function () {
	let card = this.parentElement.parentElement;
	let serviceCards = card.parentElement;
	let delay = 500;

	// Slide cards up and hide the rest
	$(serviceCards).slideUp(300).delay(delay).slideDown(300);
	setTimeout(function () {
		$(serviceCards).find(".card").not(card).addClass("d-none");
	}, delay);

	// Make the card bigger & show new text and button
	setTimeout(function () {
		$(card).css("transition", "0.3s ease-in-out");

		// Make the card bigger
		$(serviceCards).find(".card").not(card).addClass("d-none");
		$(card).addClass("w-100");

		// Show hidden card-text
		$(card).find(".card-text").first().addClass("d-none");
		$(card).find(".card-text").last().removeClass("d-none");

		// Swap Button
		$(card).find(".btn").first().addClass("d-none");
		$(card).find(".btn").last().removeClass("d-none");
	}, delay);
});

// Closing Animation
$(".services-card > .card .btn-return").on("click", function () {
	let card = this.parentElement.parentElement;
	let serviceCards = card.parentElement;
	let delay = 500;

	// Slide cards up and shows the rest
	$(serviceCards).slideUp(300).delay(delay).slideDown(300);
	setTimeout(function () {
		$(serviceCards).find(".card").not(card).removeClass("d-none");
	}, delay);

	// Make the card smaller & return older text and button
	setTimeout(function () {
		$(serviceCards).find(".card").not(card).removeClass("d-none");
		$(card).removeClass("w-100");

		// Show hidden card-text
		$(card).find(".card-text").first().removeClass("d-none");
		$(card).find(".card-text").last().addClass("d-none");

		// Swap Button
		$(card).find(".btn").first().removeClass("d-none");
		$(card).find(".btn").last().addClass("d-none");
	}, delay);
});
