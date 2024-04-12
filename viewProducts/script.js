const specialInstructions = document.querySelectorAll("#box");
let checked = document.querySelectorAll("#checked");
let flag = true;

specialInstructions.forEach((specialInstruction, index) => {
  specialInstruction.addEventListener("click", () => {
    if (flag) {
      // ye islie kyuki nhitoh vo d-none hi rhega and flag=true hokr ayega tab bi
      checked[index].classList.remove("d-none");
      checked[index].innerHTML =
        ' <textarea cols="80" rows="5" style="width:100%"></textarea>';
      flag = false;
    }
    // let txtarea=document.createElement('p')
    // document.body.appendChild(txtarea)
    else {
      checked[index].classList.add("d-none");
      flag = true;
      console.log("true");
    }
  });
});

// left side
const instock = document.querySelector("#instock");
const availablility = document.querySelector("#availability");
availablility.addEventListener("click", () => {
  if (flag) {
    console.log("open");
    instock.classList.remove("d-none");
    flag = false;
  } else {
    instock.classList.add("d-none");
    flag = true;
  }
});

// price range
const pricerange = document.querySelector(".price-range");
const range = document.querySelector("#range");
pricerange.addEventListener("click", () => {
  if (flag) {
    console.log("open");
    range.classList.remove("d-none");
    flag = false;
  } else {
    range.classList.add("d-none");
    flag = true;
  }
});

// product types
const producttypes = document.querySelector(".product-types");
const types = document.querySelector("#types");
producttypes.addEventListener("click", () => {
  if (flag) {
    console.log("open");
    types.classList.remove("d-none");
    flag = false;
  } else {
    types.classList.add("d-none");
    flag = true;
  }
});

const signUpContent = document.querySelector(".sign-up-content");
const loginContent = document.querySelector(".login-content");
const login = document.querySelector(".login");
const signUp = document.querySelector(".sign-up");

login.addEventListener("click", () => {
  loginContent.classList.remove("d-none");
  signUpContent.classList.add("d-none");
});
signUp.addEventListener("click", () => {
  signUpContent.classList.remove("d-none");
  loginContent.classList.add("d-none");
});

function signUpData() {
  let name = document.querySelector("#name-ips").value;
  let password = document.querySelector("#password-ips").value;
  let re_enter_password = document.querySelector("#re-enterpassword-ips").value;
  // localStorage.setItem("name",name)
  // localStorage.setItem("password",password)

  let user_data = new Array();
  user_data = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_data.some((v) => {
      console.log(v);
      return v.name == name;
    })
  ) {
    alert("User already exist");
  } else {
    user_data.push({
      name: name,
      password: password,
      re_enter_password: re_enter_password,
    });
    localStorage.setItem("users", JSON.stringify(user_data));
  }
}

function loginData() {
  let name = document.querySelector("#name-ip").value;
  let password = document.querySelector("#password-ip").value;

  // localStorage.setItem("name",name)
  // localStorage.setItem("password",password)

  let user_data = new Array();
  user_data = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_data.some((v) => {
      console.log(v);
      return v.name == name && v.password == password;
    })
  ) {
    alert("Login Successful");
  } else {
    alert("Login Fail");
  }
}

function Submit(event) {
  event.preventDefault();

  if (!loginContent.classList.contains("d-none")) {
    loginData();
  } else {
    signUpData();
  }
}

let submitBtn = document.querySelector("#submitData-btn");

submitBtn.addEventListener("click", Submit);

// let cartProducts = [];

// function addToCart(title, price, quantity) {
//   let productIndex = cartProducts.findIndex(
//     (product) => product.title === title
//   );
//   if (productIndex !== -1) {
//     // If product already exists in cart, update the quantity
//     cartProducts[productIndex].quantity += quantity;
//     console.log(
//       "Quantity updated for",
//       title,
//       ":",
//       cartProducts[productIndex].quantity
//     );
//   } else {
//     // If product doesn't exist in cart, add it as a new entry
//     let product = {
//       title: title,
//       price: price,
//       quantity: quantity,
//     };
//     cartProducts.push(product);
//     // console.log("Product added to cart:", product);
//   }
// }

// function updateQuantity(title, newQuantity) {
//   let productIndex = cartProducts.findIndex(
//     (product) => product.title === title
//   );
//   if (productIndex !== -1) {
//     cartProducts[productIndex].quantity = newQuantity;
//     console.log("Quantity updated for", title, ":", newQuantity);
//   }
// }
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

function addToCart(title, price, quantity) {
  let productIndex = cartProducts.findIndex(
    (product) => product.title === title
  );
  if (productIndex !== -1) {
    cartProducts[productIndex].quantity += quantity;
  } else {
    let product = { title, price, quantity };
    cartProducts.push(product);
  }
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

function updateQuantity(title, newQuantity) {
  let productIndex = cartProducts.findIndex(
    (product) => product.title === title
  );
  if (productIndex !== -1) {
    cartProducts[productIndex].quantity = newQuantity;
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
}

document.querySelectorAll(".addtocartbtn").forEach((button) => {
  button.addEventListener("click", function () {
    let title = this.closest(".col-fluid").querySelector("p").textContent;
    let price = this.closest(".col-fluid").querySelector("#price").textContent;
    let quantity = parseInt(
      this.closest(".col-fluid").querySelector("#quantity").textContent
    );
    console.log(quantity);
    console.log(typeof quantity);
    addToCart(title, price, quantity);

    console.log("All products in the cart:");
    // console.log(cartProducts);
  });
});

document.querySelectorAll("#plus").forEach((button) => {
  button.addEventListener("click", function () {
    let title = this.closest(".col-fluid").querySelector("p").textContent;
    let quantityElement = this.closest(".col-fluid").querySelector("#quantity");
    let currentQuantity = parseInt(quantityElement.textContent);
    let newQuantity = currentQuantity + 1;

    quantityElement.textContent = newQuantity;
    updateQuantity(title, newQuantity);
  });
});

document.querySelectorAll("#minus").forEach((button) => {
  button.addEventListener("click", function () {
    let title = this.closest(".col-fluid").querySelector("p").textContent;
    let quantityElement = this.closest(".col-fluid").querySelector("#quantity");
    let currentQuantity = parseInt(quantityElement.textContent);
    let newQuantity = Math.max(currentQuantity - 1, 0); // Ensure quantity doesn't go below 0

    quantityElement.textContent = newQuantity;
    updateQuantity(title, newQuantity);
  });
});
