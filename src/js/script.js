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