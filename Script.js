document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Form Validation on Submit
    loginForm.addEventListener("submit", function (event) {
        if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Please fill in both fields.");
            event.preventDefault(); // Prevent form submission
        } else {
            alert("Login successful!");
        }
    });

    // Password Toggle Feature
    const togglePassword = document.createElement("span");
    togglePassword.textContent = "👁️";
    togglePassword.style.cursor = "pointer";
    togglePassword.style.marginLeft = "10px";
    
    passwordInput.parentNode.appendChild(togglePassword);

    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "🙈"; // Hide icon
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "👁️"; // Show icon
        }
    });
});
