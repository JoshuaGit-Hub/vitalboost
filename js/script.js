// Carrinho

const btnCarrinho = document.querySelector('#btn-carrinho');
const iconCarrinho = document.querySelector('#carrinho_icon');

let carrinhoAtivo = false;

btnCarrinho.addEventListener('click', () => {
    if(iconCarrinho.classList.contains('ativo')){
        return;
    }
        iconCarrinho.classList.remove('ativo');
        void iconCarrinho.offsetWidth;
        iconCarrinho.classList.add('ativo');
        setTimeout(()=>{
            iconCarrinho.classList.remove('ativo');
        }, 1000);
});

// Menu hamburguer

const menuHamburguer = document.querySelector('#menu-hamburguer');
const overlay = document.querySelector('#overlay');
const menuContent = document.querySelector('.menu-hamburguer-content');

menuHamburguer.addEventListener('click', () => {
    menuContent.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
});

// Overlay das janelas e o menu Hambuguer

overlay.addEventListener('click', () => { 
    if(overlay.classList.contains('ativo') && menuContent.classList.contains('ativo')){
        menuContent.classList.remove('ativo');
        overlay.classList.remove('ativo');
    }else{
        windowForm.classList.remove('active');
        overlay.classList.remove('ativo');
    }
});

// "API" de mandar msg

function mandarMsg() {
    const msg = 'Olá, gostaria de saber mais informações sobre os produtos que estão disponíveis.';
    window.open(`https://wa.me/525521904656?text=${encodeURIComponent(msg)}`, '_blank');
}

// Window de contato

const btnEmail = document.querySelector('#btn_email');
const windowForm = document.querySelector('#form-window');

btnEmail.addEventListener('click', () => {
    windowForm.classList.add('active');
    overlay.classList.add('ativo');
});