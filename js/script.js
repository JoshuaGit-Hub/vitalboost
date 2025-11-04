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

const menuHamburguer = document.querySelector('#menu-hamburguer');
const overlay = document.querySelector('#overlay');
const menuContent = document.querySelector('.menu-hamburguer-content');

menuHamburguer.addEventListener('click', () => {
    menuContent.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
});

overlay.addEventListener('click', () => { 
    if(overlay.classList.contains('ativo')){
        menuContent.classList.remove('ativo');
        overlay.classList.remove('ativo');
    }else{return};
});