// ============================
// Part 1: Event Handling
// ============================

// Counter Game
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counterDisplay");
let counter = 0;

counterBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = `Counter: ${counter}`;
});

// ============================
// Part 2: Interactive Elements
// ============================

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ Section Toggle
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ============================
// Part 3: Form Validation
// ============================

const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  let valid = true;

  // Name Validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation (Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success Message
  if (valid) {
    formSuccess.textContent = "🎉 Registration successful!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});

// Live Validation (real-time feedback)
[nameInput, emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => {
    form.dispatchEvent(new Event("submit", { cancelable: true }));
  });
});
