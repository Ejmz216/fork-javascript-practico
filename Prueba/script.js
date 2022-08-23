/* Pulsadores*/
const email = document.querySelector('.navbar-email');
const iconoM = document.querySelector('.menu');
const shopCart = document.querySelector('.navbar-shopping-cart');

/* Menus */
const DesktopMenu = document.querySelector('.desktop-menu');
const MobileMenu = document.querySelector('.mobile-menu');
const ShopMenu = document.querySelector('.product-detail');

/* CONTENERDORES  */
const cardsContainer = document.querySelector('.cards-container');

email.addEventListener('click', toggleDMenu);
iconoM.addEventListener('click', toggleMMenu);
shopCart.addEventListener('click', toggleSMenu);

function toggleDMenu() {
    DesktopMenu.classList.toggle('inactive');
    MobileMenu.classList.add('inactive');
    ShopMenu.classList.add('inactive');

}
function toggleMMenu() {
    DesktopMenu.classList.add('inactive');
    MobileMenu.classList.toggle('inactive');
    ShopMenu.classList.add('inactive');

}
function toggleSMenu() {
    DesktopMenu.classList.add('inactive');
    MobileMenu.classList.add('inactive');
    ShopMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arreglo) {
    for (product of arreglo) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        // product= {name, price, image} -> product.image
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);

            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

            const productInfoDiv = document.createElement('div');
                const productPrice = document.createElement('p');
                productPrice.innerText = '$' + product.price;

                const productName = document.createElement('p');
                productName.innerText = product.name;

                productInfoDiv.append(productPrice,productName);

            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

            productInfoFigure.appendChild(productImgCart);

            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);

            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);

            cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);