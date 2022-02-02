import { products } from '../../data/products.js';
import { displayProducts } from '../allProducts.js';
const searchForm = document.querySelector('.search-form');
const allProducts = products;
const featuredPro = document.querySelector('.all-products');
const proName = document.querySelector('.pro-name');
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener('click', (e) => {
        const brandName = e.currentTarget.dataset.brand;
        // console.log(brandName)
        proName.innerHTML = brandName;
        const proBrand = allProducts.filter((pro) => {
            // console.log(pro.brand)
            if (brandName === pro.brand) {
                // console.log(pro)
                return pro;
            }
        })

        if (brandName === 'all products') {
            featuredPro.classList.remove('block')
            displayProducts(allProducts, featuredPro)
        } else if (proBrand.length === 0) {
            console.log('no such brand')
            featuredPro.classList.add('block')
            featuredPro.innerHTML = `<div class="not-found">
        <img src="./images/not-found.svg" alt="" class="blank">
        <h2>Sorry, we are working <br>on adding new products <br>of <span class="brand">${brandName}</span></h2>
    </div>`
        }
        else {
            featuredPro.classList.remove('block')
            displayProducts(proBrand, featuredPro)
        }

    })
})
