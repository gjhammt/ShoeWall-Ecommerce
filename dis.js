import { products } from './css/products.js';

const allProducts = products;

// console.log(allProducts)
// free()
const des = document.querySelector('.pro-description')
// console.log(des.innerHTML)
// console.log(typeof des)
let searchId = window.location.search;

let spliced = Number(searchId.slice(4))
// console.log(spliced)

// let result = allProducts.filter(item => item.id === spliced);
// console.log(typeof result)
// console.log(result[0])

// fo
// window.addEventListener('DOMContentLoaded', () => {
    // let specificPro = allProducts.map((item) => {
    //         // return item.title;
    //         return
    //         `<div class="pro-des">
    //             <h4>${item.title}</h4>
    //             <h1>Air Force 1</h1>
    //             <h3>$120</h3>
    //             <h5>Colors</h5>
    //             <div class="colors">
    //                 <div class="col red"></div>
    //                 <div class="col blue"></div>
    //                 <div class="col black"></div>
    //             </div>
    //             <div class="size">
    //                 <!-- <button class="size-btn">7</button> -->
    //                 <button class="size-btn">7.5</button>
    //                 <button class="size-btn">8</button>
    //                 <button class="size-btn">8.5</button>
    //                 <button class="size-btn">9</button>
    //                 <button class="size-btn">9.5</button>
    //                 <button class="size-btn">10</button>
    //             </div>
    //             <div class="stars">
    //                 <i class="fas fa-star"></i>
    //                 <i class="fas fa-star"></i>
    //                 <i class="fas fa-star"></i>
    //                 <i class="fas fa-star"></i>
    //                 <i class="fas fa-star"></i>
    //             </div>

    //             <div class="btn-cart">
    //                 <button>Add to cart 
    //                     <!-- <i class="fas fa-shopping-cart"></i> -->
    //                 </button>
    //                 <button><i class="fas fa-heart"></i></button>
    //             </div>
    //         </div>`
        
    // })
    // console.log(specificPro)
    // specificPro = specificPro.join('')
    // des.innerHTML = specificPro;

    // console.log(des.innerHTML)
    // console.log(typeof specificPro)
    // console.log(specificPro)

// })
    


// console.log(specificPro)  
// console.log(typeof specificPro)  

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
                    <button>Add to cart 
                        <!-- <i class="fas fa-shopping-cart"></i> -->
                    </button>
                    <button><i class="fas fa-heart"></i></button>
                </div>
            </div>`
        }
    })
    displayPro = displayPro.join('');
    des.innerHTML = displayPro;

});