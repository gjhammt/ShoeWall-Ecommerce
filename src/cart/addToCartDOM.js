let empty = document.querySelector('.empty')

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

export {addToCartDOM};