//Search Product
import { products } from '../../data/products.js';
import { displayProducts } from '../allProducts.js';
const searchForm = document.querySelector('.search-form');
const allProducts = products;
const featuredPro = document.querySelector('.all-products');
const value = document.querySelector('.search');
searchForm.addEventListener('keyup', () => {
    const inputVal = value.value;
    if (inputVal) {
        const newStore = products.filter((pro) => {
            let { title } = pro;
            // console.log(title)
            title = title.toLocaleLowerCase();
            if (title.startsWith(inputVal)) {
                return pro
            }
        })
        console.log(newStore)
        displayProducts(newStore, featuredPro);
        if (newStore.length < 1) {
            featuredPro.innerHTML = `<div class="not-found">
        <img src="./images/not-found.svg" alt="" class="blank">
        <h2>Sorry, no product <br> matches your search</h2>
    </div>`
        }
    }
    else {
        displayProducts(allProducts, featuredPro)
    }
})
