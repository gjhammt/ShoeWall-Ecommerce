import { products } from './css/products.js';

const allProducts = products;
const cartItems = [];
const featuredPro = document.querySelector('.all-products');
const proName = document.querySelector('.pro-name');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchForm = document.querySelector('.search-form');
const value = document.querySelector('.search');
let cartIcon = document.querySelector('.cart-icon')
let cartOverlay = document.querySelector('.cart-overlay')
let cartDiv = document.querySelector('.cart')
let closeCart = document.querySelector('.close-cart')
let empty = document.querySelector('.empty')
let cartTotalDOM = document.querySelector('.cartTotal') 
// console.log(empty)
// let divCart = document.querySelector('.newDiv')

// let amount = document.querySelector('.amount')
const displayProducts = (products) => {
    let displayPro = products.map((pro) => {
        return `<div class="pro-card" data-id=${pro.id}>
                                <div class="header">
                                    <img src=${pro.img[0]} alt="" class="pro-img">
                                </div>
                                <div class="body">
                                    <h3>${pro.title}</h3>
                                    <h6>${pro.category}</h6>
                                    <h6>${pro.colors}</h6>
                                    <h3>$${pro.price}</h3>
                                    <!--<i class="fas fa-heart"></i>-->
                                    <i class="fas fa-shopping-cart add-cart" data-id=${pro.id}></i>
                                </div>
                
                            </div>`
    })
    displayPro = displayPro.join('');
    featuredPro.innerHTML = displayPro;
    // console.log(displayPro);
};

// localStorage.clear()
// find product
const findProduct = (id) => {
    let product = allProducts.find((product) => product.id === id)
    // console.log(product)
    return product;
}


// display all products


const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item))
    } else {
        storageItem = [];
    }
    return storageItem;
}

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
}

// setStorageItem('cart', [])
// const addToCart = (proCart) => {
//     let cartItemsToAdd =
//         proCart.map((item) => {
//             return `<div class="cart-pro">
//                 <div class="product">
//                     <img src=${item.img[0]} width="300px" alt="">
//                 </div>
//                 <div class="detail">
    
//                     <h3>${item.title}</h3>
//                     <h6>Color - White</h6><br>
//                     <h6>Size - 8</h6>
//                     <div class="icon">
    
    
//                         <div class="quantity">
//                             <i class="fas fa-minus"></i>
//                             <span class="amount" data-id=${item.id}>${item.amount}</span>
//                             <i class="fas fa-plus"></i>
//                         </div>
//                     </div>
//                     <h3 class="price">$120</h3>
//                     <i class="fas fa-trash-alt"></i>
    
//                 </div>
//             </div>`
//             // }
//         })

//     cartItemsToAdd = cartItemsToAdd.join('');
//     let newDiv = document.createElement('div')
//     newDiv.classList.add('newDiv')
//     empty.innerHTML = '';
//     empty.appendChild(newDiv)
//     newDiv.innerHTML = cartItemsToAdd
//     // = cartItemsToAdd;
// }

window.addEventListener('DOMContentLoaded', () => {

    displayProducts(allProducts)
    // addToCart(getStorageItem('cart'));
});

let cart = getStorageItem('cart')
/// filter items
// console.log(cart)
filterBtns.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener('click', (e) => {
        const brandName = e.currentTarget.dataset.brand;
        console.log(brandName)
        proName.innerHTML = brandName;
        const proBrand = allProducts.filter((pro) => {
            // console.log(pro.brand)
            if (brandName === pro.brand) {
                // console.log(pro)
                return pro;
            }
            // if(brandName !== pro.brand){
            //     console.log('no such brand found')
            //     return {}
            // }
        })

        // console.log(proBrand.length)
        if (brandName === 'all products') {
            featuredPro.classList.remove('block')
            displayProducts(allProducts)
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
            displayProducts(proBrand)
        }

    })
})


searchForm.addEventListener('keyup', () => {
    const inputVal = value.value;
    if (inputVal) {
        const newStore = products.filter((pro) => {
            let { title } = pro;
            console.log(title)
            title = title.toLocaleLowerCase();
            if (title.startsWith(inputVal)) {
                return pro
            }
        })
        console.log(newStore)
        displayProducts(newStore);
        if (newStore.length < 1) {
            featuredPro.innerHTML = `<div class="not-found">
        <img src="./images/not-found.svg" alt="" class="blank">
        <h2>Sorry, no product <br> matches your search</h2>
    </div>`
        }
    }
    else {
        displayProducts(allProducts)
    }
})

// const updateAmount = (id) => {
//     let newAmount;
//     cart = cart.map((item) => {
//         if (item.id === id) {
//             newAmount = item.amount - 1;
//             item = { ...item, amount: newAmount }
//         }
//         return item
//     })
//     // if(newAmount === 0){
//     //     cart = cart.map((item) => {
//     //         if (item.id !== id){
//     //             return item
//     //         }
//     //     })    
//     // }
//     console.log(cart)
//     setStorageItem('cart', cart)
//     return newAmount

// }
// const updateAmount2 = (id) => {
//     let newAmount;
//     cart = cart.map((item) => {
//         if (item.id === id) {
//             newAmount = item.amount + 1;
//             item = { ...item, amount: newAmount }
//         }
//         return item
//     })
//     // if(newAmount === 0){
//     //     cart = cart.map((item) => {
//     //         if (item.id !== id){
//     //             return item
//     //         }
//     //     })    
//     // }
//     // console.log(cart)
//     setStorageItem('cart', cart)
//     return newAmount

// }

// const removeLocal = (id) => {
//     // let cartDom = getStorageItem('cart');
//     cart.filter((cartItem) => cartItem.id !== id)
//     // console.log(cart)
//     setStorageItem('cart', cart)
// }

// const removeItem = () => {
//     // let cartLocal = getStorageItem('cart');
//     cartDiv.addEventListener('click', (e) => {
//         console.log(e.target)
//         const id = e.target.dataset.id;
//         if (e.target.classList.contains('fa-trash-alt')) {
//             removeLocal(id)
//             console.log(e.target.parentElement)
//             e.target.parentElement.parentElement.remove()
//         }
//     })
// }

// const increase = () => {
//     cartDiv.addEventListener('click', (e) => {
//         console.log(e.target)
//         const amount = e.target.previousElementSibling;
//         console.log(amount)
//         const id = parseInt(amount.dataset.id);
//         // console.log(id)
//         if (e.target.classList.contains('fa-plus')) {
//             let count = amount.innerHTML;
//             console.log(typeof count)
//             count = parseInt(count) + 1;
//             // let newAmount;
//             // console.log(id)
//             // cart = cart.map((item) => {
//             //     console.log(item.id)
//             //     if (item.id === id) {
//             //         console.log(item)
//             //         item.id = count
//             //     //     item = { ...item, amount: count }
//             //     //     return count;
//             //     }
//             // })
//             // console.log(cart)
//             updateAmount2(id)
//             amount.innerHTML = count;
//             console.log(count)
//             // setStorageItem('cart', cart)
//             // e.target.parentElement.parentElement.remove()
//         }
//     })
// }
// const decrease = () => {
//     cartDiv.addEventListener('click', (e) => {
//         console.log(e.target)
//         const amount = e.target.nextElementSibling;
//         console.log(amount)
//         const id = parseInt(amount.dataset.id);
//         if (e.target.classList.contains('fa-minus')) {
//             let count = parseInt(amount.innerHTML);
//             // console.log(typeof count)
//             if (count > 1) {
//                 count = count - 1;
//                 updateAmount(id)
//             } else if (count = 1) {
//                 removeLocal(id)
//                 updateAmount(id)
//                 e.target.parentElement.parentElement.parentElement.parentElement.remove()
//                 // .remove()
//             }
//             // console.log(id)
//             // console.log(cart)
//             // let itemUpdate = cart.find((item) => item.id === id)
//             // console.log(itemUpdate.amount)
//             // itemUpdate.amount = count

//             amount.innerHTML = count;
//             console.log(count)
//             // e.target.parentElement.parentElement.remove()
//         }
//     })
// }

cartIcon.addEventListener('click', () => {
    cartOverlay.classList.add('show-overlay')
    cartDiv.classList.add('show-cart')
})
closeCart.addEventListener('click', () => {
    console.log(' from close')
    cartOverlay.classList.remove('show-overlay')
    cartDiv.classList.remove('show-cart')
})
// removeItem()
// increase()
// decrease()

// add product to cart DOM

const addToCartDOM = ({ id, title, price, img, amount }) => {
    // console.log({ id, title, price, img, amount })
    const newDiv = document.createElement('div')
    newDiv.classList.add('newDiv');

    newDiv.innerHTML =
        `<div class="cart-pro" data-id=${id}>
            <div class="product">
                <img src=${img[0]} width="300px" alt="">
            </div>
            <div class="detail">
                <h3>${title}</h3>
                <h6>Color - White</h6><br>
                <h6>Size - 8</h6>
                <div class="icon">
                    <div class="quantity">
                        <i class="fas fa-minus" data-id=${id}></i>
                        <span class="amount" data-id=${id}>${amount}</span>
                        <i class="fas fa-plus" data-id=${id}></i>
                    </div>
                </div>
                <h3 class="price">$${price}</h3>
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </div>
        </div>`

    empty.appendChild(newDiv)     
}



const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);
    if (!item) {
        let product = findProduct(id);
        console.log(product)
        product = {...product, amount: 1 }
        console.log(product)
        cart = [...cart, product]
        
        console.log(cart)
        // add itrm to cart DOM
        addToCartDOM(product)
    } else{
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




featuredPro.addEventListener('click', (e) => {
    let id;
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.parentElement)
    // // console.log(e.target.)
    // // console.log(e.currentTarget)
    // // console.log(e.target.classList.contains('add-cart'))
    // // console.log(e.target.parentElement.parentElement.classList.contains('pro-card'))
    // console.log(e.target.parentElement.parentElement.firstChild)
    
    // if (e.target.parentElement.parentElement.firstChild.classList.contains('pro-card')) {
    // //     // console.log(e)
    //     id = parseInt(e.target.parentElement.parentElement.firstChild.dataset.id)
    //     console.log(id)
    // //     // console.log('hi')
    //     window.open(`./product.html?id=${id}`, '_blank')
    //     return id;
    // }
    if (e.target.classList.contains('add-cart')) {
        console.log('from cart')
        // id = Number(e.target.parentElement.parentElement.dataset.id)


    //     let item = cart.find((cartItem) => cartItem.id === id);
    //     console.log(item);

    //     if (!item) {
    //         let product = allProducts.find((pro) => pro.id === id);
    //         console.log(product)
    //         product = { ...product, amount: 1 }
    //         cart = [...cart, product]
    //         console.log(cart)
    //         addToCart(cart)
    //         // console.log(product)
    //     }
    //     else {
    //         console.log('im already here')
    //         cart = [...cart.map((cartItem) => {
    //             if (cartItem.id === id) {
    //                 cartItem = { ...cartItem, amount: cartItem.amount + 1 }
    //             }
    //             // console.log(cartItem)
    //             // console.log(cartItem.amount)
    //             return cartItem;
    //         })]
    //         console.log(cart)
    //         // console.log(cart)
    //         let amount = cart.find((item) => item.id === id)
    //         let proAmount = amount.amount
    //         console.log(amount.amount)
    //         // // console.log(empty.firstChild)
    //         const items = [...empty.firstChild.querySelectorAll('.amount')];
    //         // const decrease = [...empty.firstChild.querySelectorAll('.fa-minus')];
    //         let newAmount = items.find((value) => value.dataset.id == id);

    //         // console.log(decrease)
    //         // decrease.forEach((minus) => {
    //         //     minus.addEventListener('click', () => {
    //         //         proAmount--;
    //         //         console.log('hello')
    //         //     })
    //         // })

    //         newAmount.innerHTML = proAmount;
    //         console.log(newAmount)
    //     }

    //     setStorageItem('cart', cart)
    //     return id;
        id = parseInt(e.target.dataset.id);
        console.log(id)
        addToCart(id)
        return id
    }
    // console.log(e.target) //.nextElementSibling)
    // console.log(id = e.target.parentElement.parentElement.firstChild.classList('pro-card'))
    // id = e.target.parentElement.parentElement;
    // if (!id) {
    //     return false;
    // }
    // window.open(`./product.html?id=${id}`, '_blank')
})

function displayCartItemsDOM(){
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem)
    })
}

function displayCartTotal(){
    let total = cart.reduce((total, cartItem) => {
        return total += cartItem.price * cartItem.amount
    }, 0)
    cartTotalDOM.textContent = `Total : $ ${total}`
}

function increaseAmount(id){
    let newAmount;
    cart = cart.map((cartItem) => {
        if(cartItem.id === id){
            newAmount = cartItem.amount + 1
            cartItem = {...cartItem, amount: newAmount}
        }
        return cartItem
    })
    return newAmount
}
function decreaseAmount(id){
    let newAmount;
    cart = cart.map((cartItem) => {
        if(cartItem.id === id){
            newAmount = cartItem.amount - 1
            cartItem = {...cartItem, amount: newAmount}
        }
        return cartItem
    })
    return newAmount
}
const removeLocal = (id) => {
    // let cartDom = getStorageItem('cart');
    cart = cart.filter((cartItem) => cartItem.id !== id)
    console.log(cart)
    setStorageItem('cart', cart)
}

function setupCartFunctionality(){
    // console.log(e.target)
    empty.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        console.log(id)

        //REMOVE
        if(e.target.classList.contains('fa-trash-alt')) {
        removeLocal(id)
        // console.log()
        // e.target.parentElement.parentElement.remove()
         e.target.parentElement.parentElement.parentElement.remove()
        }
        // INCREASE
        if(e.target.classList.contains('fa-plus')){
            const newAmount = increaseAmount(id);
            e.target.previousElementSibling.textContent = newAmount;
            console.log(e.target)
        }
        //DECREASE
        if(e.target.classList.contains('fa-minus')){
            const newAmount = decreaseAmount(id);
            if(newAmount === 0){
                removeLocal(id)
                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
            }
            else{
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