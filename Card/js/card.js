function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total-price");

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    totalDiv.textContent = "Total: $0";
    return;
  }

  let total = 0;
  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
            <a href="${item.detailsPage}" style="text-decoration:none; color:inherit; display:flex; align-items:center; width:100%;">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Size: ${item.size}</p>
                    <p>${item.description}</p>
                </div>
            </a>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;

    cartItemsDiv.appendChild(itemDiv);
  });

  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function checkout() {
  window.location.href = "C:\home\cart\card.html";
}

window.onload = loadCart;
