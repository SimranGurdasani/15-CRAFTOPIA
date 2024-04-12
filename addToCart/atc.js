document.addEventListener('DOMContentLoaded', function() {
    const cartBody = document.getElementById('cart-body');
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    // Function to add product to the table
    function addToCart(product) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.title}</td> 
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>
                <button class="btn remove" onclick="removeFromCart(this, ${cartProducts.indexOf(product)})">Remove</button>
            </td>
        `;
        cartBody.appendChild(row);
    }

    // Render each product in the cartProducts
    cartProducts.forEach(product => {
        addToCart(product);
    });

    // Define removeFromCart on the window object to make it accessible from HTML
    window.removeFromCart = function(button, index) {
        if (index > -1) {
            cartProducts.splice(index, 1); // Remove the item from the array
            localStorage.setItem('cartProducts', JSON.stringify(cartProducts)); // Update localStorage
            const row = button.parentNode.parentNode;
            cartBody.removeChild(row); // Remove the row from the table
        }
    };
});
