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

    closeCart.classList.remove('active');
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

// adicionar item ao carrinho 

const cartItemsContainer = document.querySelector('.cart-items');
const item = document.querySelectorAll('.items');

// Gramas boolean

let g700;
let g500;

let preco700 = 44.90;
let preco500 = 39.90;
let totalPreco700 = preco700;
let totalPreco500 = preco500;

let qntProd700 = 1;
let qntProd500 = 1;

function criarItem(qnt) {
    let novoItem = document.createElement('div');
    novoItem.classList.add('items');

    if (qnt === 500) {
        novoItem.innerHTML = `
            <img src="images/energy_max-img-500g.png" alt="Imagem do produto de 500 gramas">
            
            <div class="items-content">
                <h3>Energy MAX <span class="qnt-grams">500g</span></h3>
                <p class="preco">R$ <span id="preco-at-500">${totalPreco500.toFixed(2)}</span></p>

            </div>
            <div class="qnt-container">
                <span class="menos btns-control"><i class="fa-solid fa-minus"></i></span>
                <span class="numero" id="qntd500">${qntProd500}</span>
                <span class="mais btns-control"><i class="fa-solid fa-plus"></i></span>
            </div>`;
        cartItemsContainer.appendChild(novoItem);

        if (g500) {
            totalPreco500 += preco500;
            document.querySelector('#preco-at-500').innerHTML = totalPreco500.toFixed(2);
            qntProd500 += 1;
            document.querySelector('#qntd500').innerHTML = qntProd500;
        }

        g500 = true;

        

    } else {
        novoItem.innerHTML = `
            <img src="images/energy_max-img.png" alt="Imagem do produto de 700 gramas">
            
            <div class="items-content">
                <h3>Energy MAX <span class="qnt-grams">700g</span></h3>
                <p class="preco">R$ <span id="preco-at-700">${totalPreco700.toFixed(2)}</span></p>

            </div>
            <div class="qnt-container">
                <span class="menos btns-control"><i class="fa-solid fa-minus"></i></span>
                <span class="numero" id="qntd700">${qntProd700}</span>
                <span class="mais btns-control"><i class="fa-solid fa-plus"></i></span>
            </div>`;
        cartItemsContainer.appendChild(novoItem);

        if (g700) {
            totalPreco700 += preco700;
            document.querySelector('#preco-at-700').innerHTML = totalPreco700.toFixed(2);
            qntProd700 += 1;
            document.querySelector('#qntd700').innerHTML = qntProd700;
        }

        g700 = true;
    }
}

function addToCart(qnt) {
    if (qnt === 500 && !g500 || qnt === 700 && !g700) {
        criarItem(qnt);
    } else {
        if (qnt === 500) {
            totalPreco500 += preco500;
            document.querySelector('#preco-at-500').innerHTML = totalPreco500.toFixed(2);
            qntProd500 += 1;
            document.querySelector('#qntd500').innerHTML = qntProd500;
        } else {
            totalPreco700 += preco700;
            document.querySelector('#preco-at-700').innerHTML = totalPreco700.toFixed(2);
            qntProd700 += 1;
            document.querySelector('#qntd700').innerHTML = qntProd700;
        }
    }
}
