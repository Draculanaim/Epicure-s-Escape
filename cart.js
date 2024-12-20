// Select DOM elements
const cartSidebar = document.getElementById("cart-sidebar");
const toggleCartBtn = document.getElementById("toggle-cart");
const closeCartBtn = document.getElementById("close-cart");
const cartContainer = document.getElementById("cart-container");
const totalPriceEl = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const notification = document.getElementById("notification");

// Cart state
let cart = [];

// Function to update the cart UI
function updateCart() {
  // Clear the cart container
  cartContainer.innerHTML = "";

  // Add each item to the cart container
  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
      <button class="remove-from-cart" data-index="${index}">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  // Update total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  totalPriceEl.textContent = `Total: $${totalPrice.toFixed(2)}`;

  // Update cart count
  cartCount.textContent = cart.length;

  // Attach event listeners to remove buttons
  const removeButtons = document.querySelectorAll(".remove-from-cart");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      cart.splice(index, 1);
      updateCart();
    });
  });
}

// Function to toggle the cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle("show");
}

// Function to show a notification
function showNotification(message) {
  notification.textContent = message;
  notification.classList.remove("hidden");
  notification.classList.add("show");

  // Hide the notification after 2 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.classList.add("hidden"), 500); // Add hidden after animation
  }, 2000);
}

// Event listeners
toggleCartBtn.addEventListener("click", toggleCart);
closeCartBtn.addEventListener("click", toggleCart);

// Add items to the cart
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    // Add item to the cart
    cart.push({ id, name, price });

    // Update the cart UI
    updateCart();

    // Show notification
    showNotification(`${name} has been added to your cart!`);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalItemsSpan = document.getElementById('total-items');
  const totalCostSpan = document.getElementById('total-cost');
  const checkoutButton = document.getElementById('checkout-button');

  // Get the cart items from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Function to update the cart summary
  function updateCartSummary() {
    totalItemsSpan.textContent = cart.length;
    const totalCost = cart.reduce((total, item) => total + item.price, 0);
    totalCostSpan.textContent = totalCost.toFixed(2);
  }

  // Function to display cart items
  function displayCartItems() {
    cartItemsContainer.innerHTML = ''; // Clear previous items
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <p>${item.name} - $${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
      });
    }
  }

  // Update cart display on page load
  displayCartItems();
  updateCartSummary();

  // Proceed to checkout functionality
  checkoutButton.addEventListener('click', function () {
    if (cart.length === 0) {
      alert('Your cart is empty! Please add items to the cart before proceeding.');
      return;
    }

    // Here you would typically redirect to the checkout page
    // For example:
    // window.location.href = 'checkout.html';
    alert('Proceeding to checkout...');
  });
});




