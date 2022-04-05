import { products } from './data/products.js';
// global imports
import '../src/cart/addToCartDOM.js';
import '../src/cart/setupCart.js';
import '../src/cart/toggleCart.js';
import { displayProducts } from './src/allProducts.js';
// import '../src/filters/filters.js';
const allProducts = products;
const featuredPro = document.querySelector('.featured-pro');
const openSideNav = document.querySelector('.menu-icon')
const sideNav = document.querySelector('.side-nav')

window.addEventListener('DOMContentLoaded', () => {
    let displayPro = allProducts.filter((pro) => {
        if (pro.featured === true) {
            // console.log(pro)
            return pro;
        }
    })
    // console.log(displayPro)
    displayProducts(displayPro, featuredPro)
});


featuredPro.addEventListener('click', (e) => {
    // console.log(e.target.parentElement.classList)
    let id;
    if (e.target.parentElement.classList.contains('pro-card')) {
        // console.log(e)
        id = e.target.parentElement.dataset
        return id;
    }

    id = e.target.parentElement.parentElement.dataset.id;
    console.log(id)
    // console.log(e.currentTarget.classList.contains('fav'))
    window.open(`./product.html?id=${id}`, '_blank')
    // console.log(e.target.classList.contains('fav'))
});

openSideNav.addEventListener('click', () => {
    console.log('side')
    sideNav.classList.toggle('show-side')
})