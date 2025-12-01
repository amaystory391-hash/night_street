let users = JSON.parse(localStorage.getItem("users")) || {};

function resetPassword() {
  const username = document.getElementById("username").value.trim();
  const errorMsg = document.getElementById("error-message");

  errorMsg.style.display = "none";

  if (!username) {
    showError("Please enter your username.");
    return;
  }

  if (!users[username]) {
    showError("Username does not exist.");
    return;
  }

  alert(
    `Your password is: ${users[username]}. In a real application, a reset link would be sent to your email.`
  );
  window.location.href = "../Login/login.html";
}

function showError(message) {
  const errorMsg = document.getElementById("error-message");
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}
