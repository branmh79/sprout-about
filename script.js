let cart = [];

try {
  const stored = localStorage.getItem("plantCart");
  if (stored) {
    cart = JSON.parse(stored);
    updateCartDisplay();
  }
} catch (error) {
  console.error("Error loading cart from storage:", error);
  alert("Something went wrong loading your cart.");
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".plant-card");
    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ id, name, price, qty: 1 });
    }

    try {
      localStorage.setItem("plantCart", JSON.stringify(cart));
    } catch (err) {
      console.error("Error saving cart:", err);
    }

    updateCartDisplay();
  });
});

function updateCartDisplay() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = totalItems;
}

function loadCartPage() {
    const container = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("cart-total");
  
    if (!container || !totalDisplay) return;
  
    container.innerHTML = "";
  
    let total = 0;
  
    cart.forEach((item, index) => {
      const itemTotal = item.qty * item.price;
      total += itemTotal;
  
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <p><strong>${item.name}</strong></p>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.qty}</p>
        <p>Subtotal: $${itemTotal.toFixed(2)}</p>
        <button data-index="${index}" class="remove-item">Remove</button>
        <hr />
      `;
      container.appendChild(div);
    });
  
    totalDisplay.textContent = total.toFixed(2);
  
    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = btn.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem("plantCart", JSON.stringify(cart));
        updateCartDisplay();
        loadCartPage(); // re-render cart
      });
    });
  }
  
  // only runs this if on cart.html
  if (window.location.pathname.includes("cart.html")) {
    loadCartPage();
  }
  
  // newsletter form validation
  const newsletterForm = document.getElementById("newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("email").value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailRegex.test(emailInput)) {
        try {
          // get existing list or start fresh
          const storedEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
          
          // check if email already exists
          if (storedEmails.includes(emailInput)) {
            alert("You're already subscribed!");
          } else {
            storedEmails.push(emailInput);
            localStorage.setItem("subscribedEmails", JSON.stringify(storedEmails));
            alert("Thank you for subscribing!");
            newsletterForm.reset();
          }
        } catch (err) {
          console.error("Error saving email:", err);
          alert("Something went wrong. Try again later.");
        }
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
