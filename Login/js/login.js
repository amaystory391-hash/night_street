let users = JSON.parse(localStorage.getItem("users")) || {};

function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  errorMsg.style.display = "none";

  if (!username || !password) {
    showError("Please fill in all fields.");
    return;
  }

  if (!users[username] || users[username] !== password) {
    showError("Username or password is incorrect.");
    return;
  }

  alert("Login successful! Welcome to Night Street Game.");
  window.location.href = "../index.html";
}

function showError(message) {
  const errorMsg = document.getElementById("error-message");
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}
