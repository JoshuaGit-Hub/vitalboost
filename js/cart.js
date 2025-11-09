// BUTTONS
const cartBtn = document.querySelector('#btn_carrinho');
const closeCart = document.querySelector('#close_cart');

// PAGES 
const cartPage = document.querySelector('#cart');
const mainPage = document.querySelector('#home');
const checkoutPage = document.querySelector('#checkout');


//functions abrir, fechar

function openMainPage() {
    mainPage.classList.add('active');
    checkoutPage.classList.remove('active');
    cartPage.classList.remove('active');
    cartBtn.classList.add('show');
}

function openCartPage() {
    mainPage.classList.remove('active');
    checkoutPage.classList.remove('active');
    cartPage.classList.add('active');

    setTimeout(() => {
        closeCart.classList.add('active');
    }, 1500);
}

function openCheckoutPage() {
    mainPage.classList.remove('active');
    checkoutPage.classList.add('active');
    cartPage.classList.remove('active');
}

cartBtn.addEventListener('click', () => {
    openCartPage();
    setTimeout(() => {
        cartBtn.classList.remove('show');
    }, 1500);
});

closeCart.addEventListener('click', () => {
    openMainPage();
});

const homeLink = document.querySelectorAll('.home-link');

homeLink.forEach((l) => {
    l.addEventListener('click', () => {
        openMainPage();
    })
});