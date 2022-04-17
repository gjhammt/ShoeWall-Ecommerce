import { products } from "./data/products.js";
// global imports
import "../src/cart/addToCartDOM.js";
import "../src/cart/setupCart.js";
import "../src/cart/toggleCart.js";
import { openCart } from "./src/cart/toggleCart.js";
import { addToCart } from "./src/cart/setupCart.js";
import { displayProducts } from "./src/allProducts.js";
// import '../src/filters/filters.js';
const allProducts = products;
const featuredPro = document.querySelector(".featured-pro");
const openSideNav = document.querySelector(".menu-icon");
const sideNav = document.querySelector(".side-nav");
const brandBtns = document.querySelectorAll(".brand-btn");

window.addEventListener("DOMContentLoaded", () => {
  let displayPro = allProducts.filter((pro) => {
    if (pro.featured === true) {
      // console.log(pro)
      return pro;
    }
  });
  // console.log(displayPro)
  displayProducts(displayPro, featuredPro);
});

// featuredPro.addEventListener('click', (e) => {
//     // console.log(e.target.parentElement.classList)
//     let id;
//     if (e.target.parentElement.classList.contains('pro-card')) {
//         // console.log(e)
//         id = e.target.parentElement.dataset
//         return id;
//     }

//     id = e.target.parentElement.parentElement.dataset.id;
//     console.log(id)
//     // console.log(e.currentTarget.classList.contains('fav'))
//     // window.open(`./product.html?id=${id}`, '_blank')
//     // console.log(e.target.classList.contains('fav'))
// });

brandBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(btn);
    let brand = e.currentTarget.dataset.brand;
    window.open(`./allproducts.html?brand=${brand}`, "_blank");
    // let displayPro = allProducts.filter((pro) => {
    // if (pro.brand === brand) {
    //     console.log(pro)
    //     return pro;
    // }
  });
  // console.log(displayPro)
  // displayProducts(displayPro, featuredPro)
  // console.log(id)
  // console.log("brand")
});

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
