let imgs = document.querySelectorAll('.img');
let proDes = document.querySelector('.pro-description');
let cartIcon = document.querySelector('.cart-icon')
let cartOverlay = document.querySelector('.cart-overlay')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('.close-cart')
let empty = document.querySelector('.empty')
console.log(closeCart)

proDes.addEventListener('click', (e) => {
    console.log()
    if (e.target.classList.contains('imgSmall')) {
        let current = e.target.currentSrc;
        console.log(current)
        e.target.parentElement.parentElement.nextSibling.innerHTML = `<img src=${current} alt="">`
    }


})

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
    empty.innerHTML = '';
    empty.appendChild(newDiv)
    newDiv.innerHTML = cartItemsToAdd
    // = cartItemsToAdd;
}
getStorageItems()