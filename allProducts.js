import { products } from "./data/products.js";
// global imports
import "../src/cart/addToCartDOM.js";
import "../src/cart/setupCart.js";
import "../src/cart/toggleCart.js";
import "../src/filters/search.js";
import "../src/filters/brand.js";

// import {
//     getStorageItem,
//     setStorageItem,
// } from '../src/utils.js';
import { openCart } from "./src/cart/toggleCart.js";
import { addToCart } from "./src/cart/setupCart.js";
import { displayProducts } from "./src/allProducts.js";
const allProducts = products;
const featuredPro = document.querySelector(".all-products");
const proName = document.querySelector(".pro-name");
const openSideNav = document.querySelector(".menu-icon");
const sideNav = document.querySelector(".side-nav");
let searchId = window.location.search;
console.log(searchId);
let spliced = searchId.slice(7);
console.log(typeof spliced);
window.addEventListener("DOMContentLoaded", () => {
  featuredPro.classList.remove("block");
  if (spliced === "") {
    displayProducts(allProducts, featuredPro);
    return;
  }
  proName.innerHTML = spliced;
  let displayProduct = allProducts.filter((item) => {
    if (item.brand === spliced) {
      return item;
    }
    // else if(item.brand !== spliced){
    //     console.log(spliced)
    //     return spliced
    // }
  });
  if (displayProduct.length === 0) {
    featuredPro.classList.add("block");
    featuredPro.innerHTML = `<div class="not-found">
       <div class="center">
            <img src="./images/not-found.svg" alt="" class="blank">
       </div>
    <h2>Sorry, we are working <br>on adding new products of <span class="brand">${spliced}</span></h2>
    </div>`;
    return;
  }

  // console.log(displayProduct)
  displayProducts(displayProduct, featuredPro);
  // addToCart(getStorageItem('cart'));
});
// const modal = document.querySelector('.size-modal')
featuredPro.addEventListener("click", (e) => {
  let id;
  // console.log(e)
  if (e.target.classList.contains("add-cart")) {
    // modal.classList.add('show-modal')
    console.log("from cart");
    id = parseInt(e.target.dataset.id);
    console.log(id);
    addToCart(id);
    openCart();
    return id;
  }
  id = e.target.parentElement.parentElement.dataset.id;
  console.log(id);
  // console.log(e.currentTarget.classList.contains('fav'))
  window.open(`./product.html?id=${id}`, "_blank");
  // console.log(e.target.classList.contains('fav'))
});

openSideNav.addEventListener("click", () => {
  console.log("side");
  sideNav.classList.toggle("show-side");
});
