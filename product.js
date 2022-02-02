import { products } from './data/products.js';
import '../src/cart/addToCartDOM.js';
import '../src/cart/setupCart.js';
import '../src/cart/toggleCart.js';
import { openCart } from './src/cart/toggleCart.js';
import { addToCart } from './src/cart/setupCart.js';
// const allProducts = products;
// let imgs = document.querySelectorAll('.img');
let proDes = document.querySelector('.pro-description');
const allProducts = products;
// let empty = document.querySelector('.empty')
const des = document.querySelector('.pro-description')
let searchId = window.location.search;

let spliced = Number(searchId.slice(4))
// console.log(spliced)
  
window.addEventListener('DOMContentLoaded', () => {
    let displayPro = allProducts.map((item) =>{
        if(item.id === spliced){
        // console.log(pro.id)
            return `<div class="pro-imgs">
                <div class="all-imgs">
                    <div class="img">
                        <img src=${item.img[0]} alt="" class="imgSmall">
                    </div>
                    <div class="img">
                        <img src=${item.img[1]} alt="" class="imgSmall">
                    </div>
                    <div class="img">
                        <img src=${item.img[2]} alt="" class="imgSmall">
                    </div>
                    <div class="img">
                        <img src=${item.img[3]} alt="" class="imgSmall">
                    </div>
                </div><div class="this-pro"><img src=${item.img[0]} alt=""></div>
            </div>
        <div class="pro-des">
                <h4>${item.category}</h4>
                <h1>${item.title}</h1>
                <h3>$${item.price}</h3>
                <h5>Colors</h5>
                <div class="colors">
                    <div class="col red"></div>
                    <div class="col blue"></div>
                    <div class="col black"></div>
                </div>
                <div class="size">
                    <!-- <button class="size-btn">7</button> -->
                    <button class="size-btn">7.5</button>
                    <button class="size-btn">8</button>
                    <button class="size-btn">8.5</button>
                    <button class="size-btn">9</button>
                    <button class="size-btn">9.5</button>
                    <button class="size-btn">10</button>
                </div>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>

                <div class="btn-cart">
                    <button class="cart-add" data-id=${item.id}>Add to cart 
                        <!-- <i class="fas fa-shopping-cart"></i> -->
                    </button>
                    <!--<button><i class="fas fa-heart"></i></button>-->
                </div>
            </div>`
        }
    })
    displayPro = displayPro.join('');
    des.innerHTML = displayPro;

});


proDes.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('imgSmall')) {
        let current = e.target.currentSrc;
        console.log(current)
        e.target.parentElement.parentElement.nextSibling.innerHTML = `<img src=${current} alt="">`
    }

    if(e.target.classList.contains('cart-add')){
        let id = parseInt(e.target.dataset.id)
        // console.log(id)
        addToCart(id)
        openCart()
    }
})