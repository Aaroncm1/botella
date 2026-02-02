let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    if(!document.getElementById('cart-sidebar').classList.contains('active')) {
        toggleCart();
    }
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const count = document.getElementById('cart-count');
    const totalDisplay = document.getElementById('cart-total');
    
    container.innerHTML = '';
    total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="color:#999; text-align: center;">El carrito está vacío</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            container.innerHTML += `
                <div class="cart-item">
                    <div><strong>${item.name}</strong><br><small>${item.price}€</small></div>
                    <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">Eliminar</button>
                </div>`;
        });
    }
    count.innerText = cart.length;
    totalDisplay.innerText = total.toFixed(2) + '€';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}
// Simulación de recordatorio de la App ECOSTREAM
window.onload = function() {
    console.log("%c ECOSTREAM: Configura tu peso y sexo en la App para optimizar tu hidratación.", "color: #00a8e8; font-weight: bold;");
    console.log("%c 🧼 Recordatorio: Tu última limpieza fue hace 12h. ¡Mantén tu botella sana!", "color: #0056b3;");
};