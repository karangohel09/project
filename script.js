document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop form from submitting

        const name = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const phone = document.getElementById("phone").value.trim();

        // Name validation
        if (name.length < 3) {
            alert("Name must be at least 3 characters long");
            return;
        }

        // Email validation
        if (!email.includes("@")) {
            alert("Please enter a valid email address");
            return;
        }

        // Password validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        // Confirm password
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Phone validation
        if (phone.length < 10) {
            alert("Phone number must be at least 10 digits");
            return;
        }

        // If all validations pass
        alert("Registration successful!");
        form.reset();
    });
});
