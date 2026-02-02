function processPayment() {
  const cardNumber = document.getElementById("card-number").value;
  const expiryDate = document.getElementById("expiry-date").value;
  const cvv = document.getElementById("cvv").value;
  const errorMsg = document.getElementById("error-message");

  errorMsg.style.display = "none";

  const numberRegex = /^\d+$/;

  if (!numberRegex.test(cardNumber) || cardNumber.length !== 16) {
    showError("Card number must be exactly 16 digits.");
    return;
  }

  if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
    showError("Expiry date must be in MM/YY format.");
    return;
  }

  if (!numberRegex.test(cvv) || cvv.length !== 3) {
    showError("CVV must be exactly 3 digits.");
    return;
  }

  alert("Payment successful! Thank you for your purchase.");
  window.location.href = "../../index.html";
}

function showError(message) {
  const errorMsg = document.getElementById("error-message");
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}
