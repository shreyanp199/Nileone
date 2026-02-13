function addToCart() {
    alert("Product added to cart!");
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        document.getElementById("loginMessage").innerText = "Login Successful!";
    } else {
        document.getElementById("loginMessage").innerText = "Invalid Credentials";
    }
}