let users = JSON.parse(localStorage.getItem("users")) || {};

function registerUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();
  const errorMsg = document.getElementById("error-message");

  errorMsg.style.display = "none";

  if (!username || !password || !confirmPassword) {
    showError("Please fill in all fields.");
    return;
  }

  if (password.length < 6) {
    showError("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    showError("Passwords do not match.");
    return;
  }

  if (users[username]) {
    showError("Username already exists. Choose another one.");
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful! You can now log in.");
  window.location.href = "../Login/login.html";
}

function showError(message) {
  const errorMsg = document.getElementById("error-message");
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}
