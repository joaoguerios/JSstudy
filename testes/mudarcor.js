const paragrafos = document.querySelectorAll('p');  //coleta todos os p
const estilos = getComputedStyle(document.body);  //coleta os estilos
const backgroundColor = estilos.backgroundColor;  //coleta a cor do fundo

for (let i of paragrafos){
    i.style.backgroundColor = backgroundColor
}