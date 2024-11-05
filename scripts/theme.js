// Variables
const themeBtn = document.querySelector("#themeBtn");
let darkMode = true;

// Function to toggle theme
function toggleTheme() {
	if (darkMode) {
		// Dark Mode setting
		document.body.setAttribute("data-bs-theme", "light");
		// Theme swap to dark mode
		document.querySelectorAll(".bg-dark").forEach((element) => {
			element.classList.replace("bg-dark", "bg-light");
		});
		document.querySelectorAll(".text-bg-light").forEach((element) => {
			element.classList.replace("text-bg-light", "text-bg-dark");
		});
		document.querySelectorAll(".text-light").forEach((element) => {
			element.classList.replace("text-light", "text-dark");
		});
		document.querySelectorAll(".border-light").forEach((element) => {
			element.classList.replace("border-light", "border-dark");
		});
		// Change Button
		document.body.querySelectorAll(".btn-light").forEach((element) => {
			element.classList.replace("btn-light", "btn-dark");
			if (element.childElementCount == 1 && element.firstElementChild.tagName === "svg") {
				element.firstElementChild.setAttribute("fill", "white");
			}
		});

		// change logo to logo-black
		document.body.querySelector(".navbar-brand").src = "../images/logo-black.png";
	} else {
		// Light mode setting
		document.body.setAttribute("data-bs-theme", "dark");
		// Theme swap to light mode
		document.querySelectorAll(".bg-light").forEach((element) => {
			element.classList.replace("bg-light", "bg-dark");
		});
		document.querySelectorAll(".text-bg-dark").forEach((element) => {
			element.classList.replace("text-bg-dark", "text-bg-light");
		});
		document.querySelectorAll(".text-dark").forEach((element) => {
			element.classList.replace("text-dark", "text-light");
		});
		document.querySelectorAll(".border-dark").forEach((element) => {
			element.classList.replace("border-dark", "border-light");
		});

		// Change Button
		document.body.querySelectorAll(".btn-dark").forEach((element) => {
			element.classList.replace("btn-dark", "btn-light");
			if (element.childElementCount == 1 && element.firstElementChild.tagName === "svg") {
				element.firstElementChild.setAttribute("fill", "black");
			}
		});

		// change logo to logo-white
		document.body.querySelector(".navbar-brand").src = "../images/logo-white.png";
	}

	// Change type
	darkMode = !darkMode;
}

// Theme Swap
themeBtn.onclick = () => {
	toggleTheme();
};

// Theme Swap on load
toggleTheme;
