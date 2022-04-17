import { products } from './data/products.js';
import '../src/cart/addToCartDOM.js';
import '../src/cart/setupCart.js';
import '../src/cart/toggleCart.js';
import { openCart } from './src/cart/toggleCart.js';
import { addToCart } from './src/cart/setupCart.js';
// const allProducts = products;
// let imgs = document.querySelectorAll('.img');
let proDes = document.querySelector('.pro-description');
// let imgContainer = 
const allProducts = products;
const openSideNav = document.querySelector(".menu-icon");
const sideNav = document.querySelector(".side-nav");
// let empty = document.querySelector('.empty')
const des = document.querySelector('.pro-description')
let searchId = window.location.search;
console.log(searchId)
let spliced = Number(searchId.slice(4))
// console.log(spliced)
  
window.addEventListener('DOMContentLoaded', () => {
    let displayPro = allProducts.map((item) =>{
        if(item.id === spliced){
        // console.log(pro.id)
            return `
                <div class="des-center">
                    <div class="img img1">
                        <img src=${item.img[0]} alt="" class="imgSmall">
                    </div>
                    <div class="img img2">
                        <img src=${item.img[1]} alt="" class="imgSmall">
                    </div>
                    <div class="img img3">
                        <img src=${item.img[2]} alt="" class="imgSmall">
                    </div>
                    <div class="img img4">
                        <img src=${item.img[3]} alt="" class="imgSmall">
                    </div>
                    <div class="img-container">
                      <img src=${item.img[0]} alt="">
                    </div>
                </div>
                <div class="pro-des">
                    <div>
                        <h4>Men | Shoes</h4>
                        <h1>${item.title}</h1>
                        <div class="stars">
                        <i class="fas fa-star stars-count"></i>
                        <i class="fas fa-star stars-count"></i>
                        <i class="fas fa-star stars-count"></i>
                        <i class="fas fa-star stars-count"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>

                
                
                <div class="">
                    <h4>Price</h4>
                    <h3>$${item.price}</h3>
                    <h5>Colors</h5>
                    <div class="display-colors">
                        <div class="col red"></div>
                        <div class="col blue"></div>
                        <div class="col black"></div>
                    </div>
                   
                </div>
                </div>
                <div class="btn-cart">
                    <button data-id=${item.id}>Add to cart 
                    <i class="fas fa-shopping-cart"></i> 
                    </button>
                </div>`;
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
        e.target.parentElement.parentElement.lastElementChild.innerHTML = `<img src=${current} alt="">`;
        // e.target.nextSibling.innerHTML = `<img src=${current} alt="">`
    }

    if(e.target.classList.contains('cart-add')){
        let id = parseInt(e.target.dataset.id)
        // console.log(id)
        addToCart(id)
        openCart()
    }
})

openSideNav.addEventListener("click", () => {
  console.log("side");
  sideNav.classList.toggle("show-side");
});
const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll(".tab-nav ul li");

listItems.forEach((item, idx) => {
  
  item.addEventListener("click", () => {
    // contents.forEach((content) => {
    //   content.classList.remove("default");
    // });
    hideAllContents();
    hideAllItems();

    item.classList.add("selected-tab");
    contents[idx].classList.add("show");
    // contents[idx].classList.remove("default");
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("selected-tab"));
}