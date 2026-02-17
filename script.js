let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    let count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart");
}

function loadCart() {
    let container = document.getElementById("cart-items");
    let total = 0;

    if (!container) return;

    container.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ₹${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total-price").innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function searchProducts() {
    let input = document.getElementById("search");
    if (!input) return;

    let value = input.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(p => {
        let name = p.querySelector("h3").innerText.toLowerCase();
        p.style.display = name.includes(value) ? "block" : "none";
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

updateCartCount();
