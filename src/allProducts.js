const displayProducts = (products, element) => {
    let displayPro = products.map((pro) => {
        return `<div class="pro-card" data-id=${pro.id}>
                                    <div class="card-header">
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
    element.innerHTML = displayPro;
    // console.log(displayPro);
};

export {displayProducts};