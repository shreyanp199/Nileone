// ==========================
// UPDATE CART COUNT
// ==========================
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let countElement = document.getElementById("cart-count");
    if (countElement) {
        countElement.innerText = cart.length;
    }
}


// ==========================
// ADD TO CART
// ==========================
function addToCart(name, price, button) {

    let quantity = 1;

    // If quantity selector exists
    let qtyInput = button.parentElement.querySelector(".qty");
    if (qtyInput) {
        quantity = parseInt(qtyInput.value);
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists
    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert(name + " added to cart!");
}


// ==========================
// LOAD CART PAGE
// ==========================
function loadCart() {

    let container = document.getElementById("cart-items");
    let totalElement = document.getElementById("total-price");

    if (!container) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    container.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        container.innerHTML += `
            <div class="cart-item">
                <p><strong>${item.name}</strong></p>
                <p>₹${item.price} x ${item.quantity}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    if (totalElement) {
        totalElement.innerText = total;
    }
}


// ==========================
// REMOVE ITEM
// ==========================
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
    updateCartCount();
}


// ==========================
// SEARCH PRODUCTS
// ==========================
function searchProducts() {

    let input = document.getElementById("search");
    if (!input) return;

    let filter = input.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let title = product.querySelector("h3").innerText.toLowerCase();

        if (title.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


// ==========================
// DARK MODE
// ==========================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// ==========================
// AUTO RUN WHEN PAGE LOADS
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    loadCart();
});
