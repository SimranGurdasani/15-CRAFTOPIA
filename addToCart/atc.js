let cartProducts = []
document.addEventListener('DOMContentLoaded', function() {
    const cartBody = document.getElementById('cart-body');
     cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

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

function addProducts(event) {
    event.preventDefault(); 
  
    // if (!loginContent.classList.contains("d-none")) {
    //   loginData(); 
    // } else {
    //   signUpData();
    // }
    cartProducts.forEach(product => {
        addProductsToDatabase(product.title,product.price,product.quantity);
    });
    
  }
  
  let checkoutbtn = document.querySelector("#checkoutbtn");
  
  checkoutbtn.addEventListener('click', addProducts);

  function addProductsToDatabase(title,price,quantity){
    

    const body = {
        "title": title,
        "price": price,
        "quantity": 1 //quantity aa jyega 
      }
  
      fetch('http://localhost:8081/addProducts',{
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
    }).then((response)=>{
      response.json().then((val)=>{
        console.log(val)
        if (val.status === 'success') {
          // Use a relative path to navigate to payment.html in the same directory
          window.location.href="../../viewProducts/payment.html"
        } else {
          // Alert the user to fill in all details if status is not 'success'
          alert("Please fill in all details.");
        }
       
      })
    })
  }
