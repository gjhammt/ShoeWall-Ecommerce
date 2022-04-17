let body = document.querySelector('body')
let cartOverlay = document.querySelector('.cart-overlay')
let cartIcon = document.querySelector('.cart-icon')
let cartDiv = document.querySelector('.cart')
let closeCart = document.querySelector('.close-cart')

// Open Cart
cartIcon.addEventListener('click', () => {
    cartOverlay.classList.add('fade-in')
    cartOverlay.classList.remove('fade-out')
    cartDiv.classList.add('show-cart')
    body.classList.add('scroll-off');
})

// Close Cart
closeCart.addEventListener('click', () => {
    cartOverlay.classList.remove('fade-in')
    cartOverlay.classList.add('fade-out')
    cartDiv.classList.remove('show-cart')
    body.classList.remove('scroll-off');
})

export const openCart = () => {
    cartOverlay.classList.add("fade-in");
    cartOverlay.classList.remove("fade-out");
    cartDiv.classList.add("show-cart");
    body.classList.add("scroll-off");
    // cartOverlay.classList.add('show-overlay');
    // cartDiv.classList.add('show-cart')
    // body.classList.add('scroll-off');
};