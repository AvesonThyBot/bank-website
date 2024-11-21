$("#contactForm").validate({
	// Rules for inputs
	rules: {
		name: {
			minlength: 2,
			required: true,
		},
		email: {
			email: true,
			required: true,
		},
		subject: {
			required: true,
			minlength: 2,
		},
		message: {
			required: true,
			minlength: 2,
		},
	},
	// Disable all jquery messages
	messages: {
		name: "",
		email: "",
		subject: "",
		message: "",
	},
	// Valid Class Handler
	invalidHandler: function (event, validator) {
		// Assign invalid class
		Object.keys(validator.invalid).forEach((fieldName) => {
			$("#contactForm [name='" + fieldName + "']")
				.removeClass("is-valid")
				.addClass("is-invalid");
		});

		// Assign valid class
		$("#contactForm")
			.find(":input")
			.not(
				Object.keys(validator.invalid)
					.map((fieldName) => `[name='${fieldName}']`)
					.join(",")
			)
			.each(function () {
				$(this).removeClass("is-invalid").addClass("is-valid");
			});
	},
	// Submit Form
	submitHandler: function (form) {
		$("#contactForm").find(":input").removeClass("is-invalid").removeClass("is-valid");
		$(".alert-success").removeClass("d-none").addClass("show");
	},
});
