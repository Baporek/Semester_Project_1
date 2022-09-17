function BackToHome() {
    window.location.href = "index.html";
}

function SearchGoogle() {
    location.href = 'http://google.com'
}

// add order to the cart
(function () {
    const orderBtn = document.getElementById('order-button');
    const cart = document.getElementById('cart-container');
    orderBtn.addEventListener('click', function () {
        cart.classList.add('cart');
        console.log("add div");
        cart.innerHTML += `<i class="fas fa-shopping-cart"></i> Check your order HERE`;
    });
})();







/*
-------tests------


//onclick="OpenCart()"
        //const newOrder = document.createElement("div");
        //newOrder.classList.add('cart');
        /*document.body.appendChild(newOrder);
//cartContainer.appendChild(newOrder);

<div class = "cart" >
    <
    div id = "cart-info" > < i class = "fas fa-shopping-cart" > < /i></span >
    <
    span id = "item-count" > 2 < /span> items - $<span class="item-total">10.49</span > < /p> <
    /div> 

// show cart
(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart')
    });
})();



const cartOrder = document.createElement('div');
    cartOrder.classList.add("cart");
    cartOrder.innerHTML = ` < div id = "cart-info" > < i class = "fas fa-shopping-cart" > < /i></span > <
                    span id = "item-count" > 55 < /span> items - $<span class="item-total">4343</span > < /p> < /
                div > `;
    const cart = document.getElementById('cart');
    const total = document.querySelector('.item-total');
    cart.insertBefore(cartOrder, total);
});
        let carts = document.getElementById('order-button');
        carts.addEventListener('click', () => {
            console.log("test")";
        })
        document.getElementById("order-button").addEventListener("click", () => {
            cartNumbers();
        })
        function cartNumbers() {

            localStorage.setItem('cartNumbers', 1);
        }
        var addItemId = 0;
        function addToCart() {
            addItemId += 1;
            var selectedOrder = document.createElement('div');
            selectedOrder.classList.add('cartItem');
            selectedOrder.setAttribute('id', addItemId);
            var cartItems = document.getElementById('order-form');
            cartItems.append(selectedOrder);
        }  */
