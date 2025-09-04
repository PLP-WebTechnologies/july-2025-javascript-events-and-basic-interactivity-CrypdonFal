// ===============================
// Part 1: Event Handling
// ===============================

// Listen for button click and display a message
document.getElementById("messageBtn").addEventListener("click", function() {
    document.getElementById("messageOutput").textContent = "Hello, Daniel! You clicked the button 🎉";
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", function() {
    count++;
    document.getElementById("countValue").textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
    count = 0;
    document.getElementById("countValue").textContent = count;
});

// ===============================
// Part 3: Form Validation
// ===============================

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formSuccess").textContent = "";

    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Validate Email with regex
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    // Validate Password (min 6 chars)
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        document.getElementById("formSuccess").textContent = "Form submitted successfully! ✅";
        document.getElementById("myForm").reset();
    }
});
