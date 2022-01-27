import { products } from './css/products.js';

const allProducts = products;
const cartItems = [];
// console.log(allProducts)
const featuredPro = document.querySelector('.featured-pro');
let cartIcon = document.querySelector('.cart-icon')
let cartOverlay = document.querySelector('.cart-overlay')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('.close-cart')
const mouseCursor = document.querySelector('.cursor');
// const proCard = document.querySelectorAll('.pro-card');

window.addEventListener('DOMContentLoaded', () => {
    let displayPro = allProducts.map((pro) => {
        if (pro.featured == true) {
            return `<div class="pro-card" data-id=${pro.id} >
                   <div class="header">
                        <img src=${pro.img[0]} alt="" class="pro-img">
                   </div>
                   <div class="body">
                    <h3>${pro.title}</h3>
                    <h6>${pro.category}</h6>
                    <h6>${pro.colors}</h6>
                    <h3>$${pro.price}</h3>
                    <!--<i class="fas fa-heart"></i>
                    <i class="fas fa-shopping-cart"></i>-->
                   </div>
                </div>`
        }
        // console.log(pro.id)

    })
    // console.log(typeof displayPro)
    // console.log(displayPro)
    displayPro = displayPro.join('');
    featuredPro.innerHTML = displayPro;
    // console.log(displayPro);
    // console.log(typeof displayPro)
});

// window.addEventListener('mousemove', cursor);

// function cursor(e) {
//     mouseCursor.style.top = e.pageY - 15 + "px"
//     mouseCursor.style.left = e.pageX - 15 + "px"
// }

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


cartIcon.addEventListener('click', () => {
    cartOverlay.classList.add('show-overlay')
    cart.classList.add('show-cart')
})
closeCart.addEventListener('click', () => {
    console.log(' from close')
    cartOverlay.classList.remove('show-overlay')
    cart.classList.remove('show-cart')
})

const getStorageItems = () => {
    let storedItems = JSON.parse(localStorage.getItem('cart'))
    console.log(typeof storedItems)
    let cartItemsToAdd = 
    storedItems.map((item) => {
        return `<div class="cart-pro">
                <div class="product">
                    <img src=${item.img[0]} width="300px" alt="">
                </div>
                <div class="detail">
    
                    <h3>${item.title}</h3>
                    <h6>Color - White</h6><br>
                    <h6>Size - 8</h6>
                    <div class="icon">
    
    
                        <div class="quantity">
                            <i class="fas fa-minus"></i>
                            <span>1</span>
                            <i class="fas fa-plus"></i>
                        </div>
                    </div>
                    <h3 class="price">$120</h3>
                    <i class="fas fa-trash-alt"></i>
    
                </div>
            </div>`

    })
    
    cartItemsToAdd = cartItemsToAdd.join('');
    let newDiv = document.createElement('div')
    cart.appendChild(newDiv) 
    newDiv.innerHTML = cartItemsToAdd
    // = cartItemsToAdd;
}

getStorageItems()   
export { cartItems }

