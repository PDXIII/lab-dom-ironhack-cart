// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalDisplay = product.querySelector(".subtotal span");
  const sum = price * quantity;

  subtotalDisplay.innerHTML = sum;
  return sum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let total = 0;

  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here

  const totalDisplay = document.querySelector("#total-value span");
  totalDisplay.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("creating a new product");
  // to make my life easier, I’ve added IDs to the inputs
  const productName = document.getElementById("name-input");
  const productPrice = document.getElementById("price-input");

  let product = document.createElement("tr");
  product.classList.add("product");

  // I found it easier to keep an overview
  // in minimizing the use of .innerHTML
  // IRL this would be the moment I’d add _lodash.js

  [
    ["name", `<span>${productName.value}</span>`],
    ["price", `$<span>${productPrice.value}</span>`],
    [
      "quantity",
      `<input type="number" value="0" min="0" placeholder="Quantity" />`,
    ],
    ["subtotal", `$<span>0</span>`],
    ["action", `<button class="btn btn-remove">Remove</button>`],
  ].forEach((item) => {
    const td = document.createElement("td");
    td.classList = item[0];
    td.innerHTML = item[1];
    product.appendChild(td);
  });

  const btn = product.querySelector("button.btn-remove");
  btn.addEventListener("click", removeProduct);

  document.querySelector("#cart tbody").appendChild(product);
  productName.value = "";
  productPrice.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll(".btn.btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
