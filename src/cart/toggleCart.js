let body = document.querySelector('body')
let cartOverlay = document.querySelector('.cart-overlay')
let cartIcon = document.querySelector('.cart-icon')
let cartDiv = document.querySelector('.cart')
let closeCart = document.querySelector('.close-cart')

// Open Cart
cartIcon.addEventListener('click', () => {
    cartOverlay.classList.add('show-overlay')
    cartDiv.classList.add('show-cart')
    body.classList.add('scroll-off');
})

// Close Cart
closeCart.addEventListener('click', () => {
    cartOverlay.classList.remove('show-overlay')
    cartDiv.classList.remove('show-cart')
    body.classList.remove('scroll-off');
})

export const openCart = () => {
    cartOverlay.classList.add('show-overlay');
    cartDiv.classList.add('show-cart')
    body.classList.add('scroll-off');
};