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

// ----------  Calculator Animations ----------
// Opening animation
$("#calculatorForm").on("submit", function (event) {
	if (!$(this).valid()) return false; // End animation if not valid

	let result = $("#calculatorResult");
	let delay = 800;

	// Slide form up and show result
	$(this).removeClass("border").delay(100).slideUp(300);
	setTimeout(function () {
		$(this).css("display", "none");
		$(result).removeClass("d-none");
		$(this).slideDown(300);
		$(this).addClass("border");
		$(result).removeClass("border");
	}, delay);

	setTimeout(function () {
		$(result).addClass("border");
	}, delay * 1.5);
});

// Closing animation
$("#resultReturn").on("click", function (event) {
	let form = $("#calculatorForm");
	let result = $("#calculatorResult");
	let delay = 800;

	// Slide form up and show form
	$(result).removeClass("border").delay(100).slideUp(300);
	setTimeout(function () {
		$(result).addClass("d-none");
		$(form).css("display", "flex");
		$(result).slideDown(300);
	}, delay);

	setTimeout(function () {
		$(form).addClass("border");
	}, delay * 1.3);
});

// ---------- Service Card Animations ----------
// Opening animation
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

// Closing animation
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
