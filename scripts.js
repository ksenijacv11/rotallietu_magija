// JavaScript fails (scripts.js)

// Mūsu rotaļlietu veikala mājaslapas JavaScript kods
new Vue({
    el: '#app',
    data: {
        // Rotaļlietu saraksts
        toys: [
            { name: "Tiļda", size: "50 cm", price: "55 eiro", image: "images/toy1.jpg" },
            { name: "Pūce", size: "30 cm", price: "35 eiro", image: "images/toy2.jpg" },
            { name: "Žirafe", size: "60 cm", price: "40 eiro", image: "images/toy3.jpg" },
            { name: "Kaķis", size: "15 cm", price: "40 eiro", image: "images/toy4.jpg" },
            { name: "Ods", size: "35 cm", price: "25 eiro", image: "images/toy5.jpg" },
            { name: "Lācis", size: "25 cm", price: "25 eiro", image: "images/toy6.jpg" },
            { name: "Sniegavīrs", size: "60 cm", price: "60 eiro", image: "images/toy7.jpg" },
            { name: "Bite", size: "25 cm", price: "45 eiro", image: "images/toy8.jpg" },
            { name: "Bērnu komplekts", size: "", price: "20 eiro", image: "images/toy9.jpg" },
            { name: "Nīlzirgs", size: "15 cm", price: "10 eiro", image: "images/toy10.jpg" }
        ]
    }
});
// Izveidojam sarakstu, lai saglabātu groza saturu
var cart = [];

// Atrodam visus pogas elementus ar klasi "add-to-cart"
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Pievienojam klausītāju katrai pogai, lai apstrādātu klikšķi
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Atrodam produktu nosaukumu un cenu, kas ir saistīti ar nospiestās pogas produktu
        var productName = button.parentElement.querySelector('.product-name').innerText;
        var productPrice = button.parentElement.querySelector('.product-price').innerText;

        // Izveidojam objektu ar produktu informāciju
        var product = {
            name: productName,
            price: productPrice
        };

        // Pievienojam produktu grozam
        cart.push(product);

        // Parādām paziņojumu, ka produkts ir pievienots grozam
        alert(productName + " pievienots grozam!");

        // Atjaunojam groza sadaļu, lai parādītu jauno produktu sarakstu
        updateCart();
    });
});

// Atjaunojam groza sadaļu ar aktuālo groza saturu
function updateCart() {
    var cartList = document.getElementById('cart-list');

    // Notīram esošo groza saturu, lai atjaunotu to ar jauno informāciju
    cartList.innerHTML = '';

    // Pārbaudam, vai grozs ir tukšs
    if (cart.length === 0) {
        cartList.innerHTML = '<p>Grozs ir tukšs</p>';
    } else {
        // Ja grozs nav tukšs, izvadam katru produktu sarakstā
        cart.forEach(function(product) {
            var listItem = document.createElement('li');
            listItem.textContent = product.name + ' - ' + product.price;
            cartList.appendChild(listItem);
        });
    }
}

// Atjaunojam maksājuma veidu sarakstu
function updatePaymentMethods() {
    var paymentMethodsList = document.getElementById('payment-methods');

    // Notīram esošo maksājuma veidu sarakstu
    paymentMethodsList.innerHTML = '';

    // Izveidojam jaunus maksājuma veidus un pievienojam tos sarakstam
    var paymentMethods = ['VISA', 'Mastercard', 'PayPal'];
    paymentMethods.forEach(function(method) {
        var listItem = document.createElement('li');
        listItem.textContent = method;
        paymentMethodsList.appendChild(listItem);
    });
}

// Izsaucam funkciju, lai atjaunotu maksājuma veidu sarakstu, kad lapa ielādējas
updatePaymentMethods();
