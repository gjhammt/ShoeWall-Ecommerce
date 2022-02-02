import { products } from '../../data/products.js';

import {
    getStorageItem,
    setStorageItem,
} from '../utils.js';
import {addToCartDOM} from './addToCartDOM.js';
import { displayProducts } from '../allProducts.js';

const allProducts = products;
// const featuredPro = document.querySelector('.all-products');
// const proName = document.querySelector('.pro-name');
// const filterBtns = document.querySelectorAll('.filter-btn');
// const searchForm = document.querySelector('.search-form');
// const value = document.querySelector('.search');
let cartTotalDOM = document.querySelector('.cartTotal')
let empty = document.querySelector('.empty')
// const featuredPro = document.querySelector('.all-products');


let cart = getStorageItem('cart')

const findProduct = (id) => {
    let product = allProducts.find((product) => product.id === id)
    // console.log(product)
    return product;
}

const removeLocal = (id) => {
    // let cartDom = getStorageItem('cart');
    cart = cart.filter((cartItem) => cartItem.id !== id)
    // console.log(cart)
    setStorageItem('cart', cart)
}



const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);
    if (!item) {
        let product = findProduct(id);
        console.log(product)
        product = { ...product, amount: 1 }
        console.log(product)
        cart = [...cart, product]

        console.log(cart)
        // add itrm to cart DOM
        addToCartDOM(product, empty)
    } else {
        // update values
        let amount = increaseAmount(id);
        const items = [...empty.querySelectorAll('.amount')];
        const newAmount = items.find((value) => parseInt(value.dataset.id) === id);
        console.log(items)
        console.log(newAmount)
        newAmount.textContent = amount
    }
    displayCartTotal()
    setStorageItem('cart', cart)
}



function displayCartItemsDOM() {
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem)
    })
}

function displayCartTotal() {
    let total = cart.reduce((total, cartItem) => {
        return total += cartItem.price * cartItem.amount
    }, 0)
    cartTotalDOM.textContent = `Total : $ ${total}`
}

function increaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount + 1
            cartItem = { ...cartItem, amount: newAmount }
        }
        return cartItem
    })
    return newAmount
}
function decreaseAmount(id) {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount - 1
            cartItem = { ...cartItem, amount: newAmount }
        }
        return cartItem
    })
    return newAmount
}
function setupCartFunctionality() {
    // console.log(e.target)
    empty.addEventListener('click', (e) => {
        console.log(e.target)
        const id = parseInt(e.target.dataset.id);
        console.log(id)

        //REMOVE
        if (e.target.classList.contains('fa-trash-alt')) {
            removeLocal(id)
            // console.log()
            // e.target.parentElement.parentElement.remove()
            e.target.parentElement.parentElement.parentElement.remove()
        }
        // INCREASE
        if (e.target.classList.contains('fa-plus')) {
            const newAmount = increaseAmount(id);
            e.target.previousElementSibling.textContent = newAmount;
            console.log(e.target)
        }
        //DECREASE
        if (e.target.classList.contains('fa-minus')) {
            const newAmount = decreaseAmount(id);
            if (newAmount === 0) {
                removeLocal(id)
                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
            }
            else {
                e.target.nextElementSibling.textContent = newAmount;
            }

            // console.log(e.target)
        }

        displayCartTotal();
        setStorageItem('cart', cart)
    })

}


const init = () => {
    // console.log(cart)
    displayCartTotal()

    // add all cart items to DOM

    displayCartItemsDOM()

    setupCartFunctionality()
}

init();

export {addToCart}