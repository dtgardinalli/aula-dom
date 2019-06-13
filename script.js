const maisa = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("main img");

function abrirMenu(){
    lista.classList.toggle ("ativo");
}

maisa.onclick = abrirMenu;

function rodaARoda(){
    roleta.classList.toggle ("roda-jequiti");
    h1.innerHTML = "É PERUUUUUUUUUCAAA!"
}

roleta.onclick = rodaARoda;

{
    
}

