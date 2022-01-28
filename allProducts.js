import { products } from './css/products.js';
// global imports
import '../src/cart/addToCartDOM.js';
import '../src/cart/setupCart.js';
import '../src/cart/toggleCart.js';
import '../src/filters/search.js';
import '../src/filters/brand.js';

import {
    getStorageItem,
    setStorageItem,
} from '../src/utils.js';
import { openCart } from './src/cart/toggleCart.js';
import { addToCart } from './src/cart/setupCart.js';
import { displayProducts } from './src/allProducts.js';
const allProducts = products;



// const cartItems = [];
// const body = document.querySelector('body')
const featuredPro = document.querySelector('.all-products');
const modal = document.querySelector('.size-modal')
// const proName = document.querySelector('.pro-name');
// const filterBtns = document.querySelectorAll('.filter-btn');
// const searchForm = document.querySelector('.search-form');
// const value = document.querySelector('.search');
// let cartIcon = document.querySelector('.cart-icon')
// let cartOverlay = document.querySelector('.cart-overlay')
// let cartDiv = document.querySelector('.cart')
// let closeCart = document.querySelector('.close-cart')
// let empty = document.querySelector('.empty')
// let cartTotalDOM = document.querySelector('.cartTotal') 
// console.log(empty)
// let divCart = document.querySelector('.newDiv')


featuredPro.addEventListener('click', (e) => {
    let id;
    // console.log(e)
    if (e.target.classList.contains('add-cart')) {
        // modal.classList.add('show-modal')
        console.log('from cart')
        id = parseInt(e.target.dataset.id);
        console.log(id)
        addToCart(id)
        openCart()
        return id
    }
    id = e.target.parentElement.parentElement.dataset.id;
    console.log(id)
    // console.log(e.currentTarget.classList.contains('fav'))
    window.open(`./product.html?id=${id}`, '_blank')
    // console.log(e.target.classList.contains('fav'))
})
window.addEventListener('DOMContentLoaded', () => {

    displayProducts(allProducts, featuredPro)
    // addToCart(getStorageItem('cart'));
});

// let cart = getStorageItem('cart')
