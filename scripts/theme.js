// Variables
const themeBtn = $("#themeBtn");
let darkMode = true;

// Function to toggle theme
function toggleTheme() {
	// Light mode settings
	if (darkMode) {
		$("body").attr("data-bs-theme", "light");

		// Main classes change
		$(".bg-dark").removeClass("bg-dark").addClass("bg-light");
		$(".text-bg-light").removeClass("text-bg-light").addClass("text-bg-dark");
		$(".text-light").removeClass("text-light").addClass("text-dark");
		$(".border-light").removeClass("border-light").addClass("border-dark");
		$(".bg-body-tertiary").removeClass("bg-body-tertiary").addClass("bg-body-secondary");
		$(".btn-outline-dark").removeClass("btn-outline-dark").addClass("btn-outline-light");
		$(".btn-outline-secondary").removeClass("btn-outline-secondary").addClass("btn-secondary");

		// Change button fill
		$(".btn-light").each(function () {
			$(this).removeClass("btn-light").addClass("btn-dark");
			$(this).children("svg").attr("fill", "white");
		});

		// Change logo
		$(".navbar-brand").attr("src", "../images/logo-black.png");
	}
	// Dark mode Settings
	else {
		$("body").attr("data-bs-theme", "dark");

		// Main classes change
		$(".bg-light").removeClass("bg-light").addClass("bg-dark");
		$(".text-bg-dark").removeClass("text-bg-dark").addClass("text-bg-light");
		$(".text-dark").removeClass("text-dark").addClass("text-light");
		$(".border-dark").removeClass("border-dark").addClass("border-light");
		$(".bg-body-secondary").removeClass("bg-body-secondary").addClass("bg-body-tertiary");
		$(".btn-outline-light").removeClass("btn-outline-light").addClass("btn-outline-dark");
		$(".btn-secondary").removeClass("btn-secondary").addClass("btn-outline-secondary");

		// Change button fill
		$(".btn-dark").each(function () {
			$(this).removeClass("btn-dark").addClass("btn-light");
			$(this).children("svg").attr("fill", "black");
		});

		// Change logo
		$(".navbar-brand").attr("src", "../images/logo-white.png");
	}

	// Swap darkMode boolean
	darkMode = !darkMode;
}

// Onclick handler
themeBtn.on("click", toggleTheme);
