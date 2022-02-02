import { products } from './data/products.js';
// global imports
import '../src/cart/addToCartDOM.js';
import '../src/cart/setupCart.js';
import '../src/cart/toggleCart.js';
import '../src/filters/search.js';
import '../src/filters/brand.js';

// import {
//     getStorageItem,
//     setStorageItem,
// } from '../src/utils.js';
import { openCart } from './src/cart/toggleCart.js';
import { addToCart } from './src/cart/setupCart.js';
import { displayProducts } from './src/allProducts.js';
const allProducts = products;
const featuredPro = document.querySelector('.all-products');
// const modal = document.querySelector('.size-modal')
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


