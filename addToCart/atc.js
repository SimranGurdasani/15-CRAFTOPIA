document.addEventListener('DOMContentLoaded', function() {
    const cartBody = document.getElementById('cart-body');

    // Function to add product to cart
    function addToCart(productName, price) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${productName}</td>
            <td>${price}</td>
            <td>
                <button class="btn remove" onclick="removeFromCart(this)">Remove</button>
            </td>
        `;
        cartBody.appendChild(row);
    }

    // Remove product from cart
    window.removeFromCart = function(button) {
        const row = button.parentNode.parentNode;
        cartBody.removeChild(row);
    }

    // Example products - these would typically be added via interaction on your product listing page
    addToCart('Example Product 3', '$15.00');
    addToCart('Example Product 4', '$25.00');
});

// This function would need to be bound to real "Add to Cart" buttons on product listings
function addProductToCart(productName, price) {
    addToCart(productName, price);
}
