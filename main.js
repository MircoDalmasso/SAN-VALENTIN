let acepto = document.getElementById("acepto");
let negacion = document.getElementById("negacion");

let section = document.getElementById("section");

const textos = [
    "Estas segura?",
    "Sera inolvidable",
    "pensalo de vuelta",
    "Porfa deci q si",
    "porfisssss",
];

function funcionAcepto() {
    section.innerHTML = `
    <h1 class="title-acepto">Sabia que ibas a decir que si❤️!</h1>
    <img src="./img/gif 2.gif">
    `;
}

acepto.addEventListener("click", funcionAcepto);

let indice = 0;
function funcionNegacion() {
    let textoInsertar = textos[indice];
    negacion.innerHTML = textoInsertar;

    indice = (indice + 1) % textos.length;
};

negacion.addEventListener("click", funcionNegacion);