# Banking Website Project

## Requirements

- **Technologies**: HTML5, CSS, JavaScript, jQuery
- **Responsive Design**: Ensure the site is accessible and responsive on different devices
- **Navigation**: Include a consistent navbar and/or footer on each page
- **Design & Styling**:
  - Use banking related color scheme
  - Bootstrap, Local install and change hex values

## Pages and Functionalities

### Home Page

- **Overview** of bank services
- **Hero Section** with a welcoming banner (image)
- Link to **Mortgage Calculator**

### Mortgage Calculator

- **Page Requirements**:
  - Input fields for Loan Amount, Loan Term (years), and Monthly Income
  - Display eligibility status based on income threshold
  - Show expense breakdown with total payment, total interest, and remaining income if eligible
  - Include validation for all input fields using JavaScript and jQuery

### About Us

- **Description** of the bank’s history, mission, and values

### Contact Us

- **Contact Form**:
  - Form including name, email, subject, and message
  - Client-side validation to ensure correct input

### Services

- **Summaries** of additional banking services like savings accounts and loans
- **jQuery Animations** for interactive details

### FAQ

- **Accordion FAQ** section for frequently asked questions

## JavaScript & jQuery Functionalities

- **Mortgage Calculator Logic**:
  - Uses a fixed interest rate of 4.5% for calculations
- **Form Validation**:
  - Validates form inputs to ensure correct entries
- **Animations**:
  - jQuery animations for pages like Contact Us and Mortgage Calculator

## Mortgage Calculator Formula and Eligibility Logic

### Monthly Payment Calculation

The formula for calculating the monthly payment is:

\[
\text{Monthly Payment} = \frac{P \cdot r \cdot (1 + r)^n}{(1 + r)^n - 1}
\]

- **P** = Loan Amount
- **r** = Monthly Interest Rate (annual interest rate / 12)
- **n** = Number of monthly payments (Loan Term × 12)

### Eligibility Check

- **Threshold**: Monthly Payment should be ≤ 30% of Monthly Income
- **Result**: If Monthly Payment > 30% of Monthly Income, display "Loan denied" message
- **If Eligible**: Display expense breakdown with total payment, total interest, and remaining income after expenses

---
