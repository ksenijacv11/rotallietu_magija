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
// Example script to handle image click for modal view (if needed)

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-item img');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '90%';

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    images.forEach(image => {
        image.addEventListener('click', function() {
            modalImg.src = this.src;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});