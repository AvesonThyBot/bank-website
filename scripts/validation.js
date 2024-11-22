// Contact Form Validation (contact.html)
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

// Calculator Form Validation (mortgage.html)
$("#calculatorForm").validate({
	// Rules for inputs
	rules: {
		amount: {
			required: true,
			digits: true,
		},
		income: {
			required: true,
			digits: true,
		},
		terms: {
			required: true,
			digits: true,
		},
	},
	// Disable all jquery messages
	messages: {
		amount: "",
		income: "",
		terms: "",
	},
	// Valid Class Handler
	invalidHandler: function (event, validator) {
		// Assign invalid class
		Object.keys(validator.invalid).forEach((fieldName) => {
			$("#calculatorForm [name='" + fieldName + "']")
				.removeClass("is-valid")
				.addClass("is-invalid");
		});

		// Assign valid class
		$("#calculatorForm")
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
		$("#calculatorForm").find(":input").removeClass("is-invalid").removeClass("is-valid");
		const amount = $("input[name='amount']").val();
		const income = $("input[name='income']").val();
		const terms = $("input[name='terms']").val();
		const loanResult = calculateLoan(amount, terms, income);

		// Edit result input values
		$("#resultAmount").text("Loan Amount: £" + amount);
		$("#resultIncome").text("Monthly Income: £" + income);
		$("#resultTerms").text("Terms: " + terms);

		// Edit result output values
		$("#resultPayment").text("Total Payment: £" + loanResult.payment);
		$("#resultInterest").text("Total Interest: " + loanResult.interest);
		$("#resultPostIncome").text("Post-Expense Income: £" + loanResult.postIncome);

		$(".alert")
			.removeClass("alert-success alert-danger")
			.addClass(loanResult.eligible ? "alert-success" : "alert-danger")
			.text(loanResult.eligible ? "Loan Accepted!" : "Loan Denied!")
			.removeClass("d-none");
	},
});

// Function to calculate mortgage loan & eligiblity
function calculateLoan(amount, term, income) {
	// Monthly Interest Rate
	const interestRate = 0.045 / 12;
	const months = term * 12;

	// Monthly payment formula
	const monthlyPayment = (amount * interestRate * Math.pow(1 + interestRate, months)) / (Math.pow(1 + interestRate, months) - 1);

	// Total payment and interest and remaining income
	const payment = monthlyPayment * months;
	const interest = payment - amount;
	const postIncome = income - payment;
	console.log(payment, interest, postIncome, monthlyPayment);

	// Return all data
	return {
		payment: payment.toFixed(2),
		interest: interest.toFixed(2),
		postIncome: postIncome.toFixed(2),
		eligible: monthlyPayment <= income * 0.3,
	};
}
