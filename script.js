const maisa = document.querySelector("img");
const lista = document.querySelector ("ul");

function abrirMenu(){
    lista.classList.toggle ("ativo");
}

maisa.onclick = abrirMenu;
