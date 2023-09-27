/* 
1) Crie 1 função que recebe uma bebida e: troca seu id para comida; coloca a bebida no container de comida 
2) Crie um event listener de click que usa essa função.
*/

/* Importante 1: Como evitar que um elemento seja "excluído" ao dar appendChild() ?
Use o método .cloneNode(true) no elemento que deve ser manipulado.

Tente usar esse comando dentro da função anônima da comida: trocaComida(comidas[i].cloneNode(true)); 
Agora clique nas comidas. */

/* Importante 2: Como retornar um elemento que sofreu appendChild() ao seu container ? 
Basta criar um event listener para o parâmetro da função! */

// Código do professor
function trocaComida(elemento) {
    if (elemento.id === "comida") {
        elemento.id = "bebida";
        containerBebidas.appendChild(elemento);
    } else if (elemento.id === "bebida") {
        elemento.id = "comida";
        containerComidas.appendChild(elemento);
    }
}

function trocabeb(elemento) {
    if (elemento.id === "bebida") {
        elemento.id = "comida";
        containerComidas.appendChild(elemento);
    } else if (elemento.id === "comida") {
        elemento.id = "bebida";
        containerBebidas.appendChild(elemento);
    }
}

let comidas = document.querySelectorAll("#comida"); // Código do professor
let bebidas = document.querySelectorAll("#bebida");

let containerBebidas = document.getElementById("containerBebidas"); // Código do professor
let containerComidas = document.getElementById("containerComidas")

// Código do professor
for (let i = 0; i < comidas.length; i++) {
    comidas[i].addEventListener("click", function () {
        trocaComida(comidas[i]);
    });
}
//
for (let i = 0; i < bebidas.length; i++) {
    bebidas[i].addEventListener("click", function () {
        trocabeb(bebidas[i]);
    });
}