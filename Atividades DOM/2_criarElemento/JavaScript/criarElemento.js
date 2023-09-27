/* Crie um div que utilize a classe 'divPadrao' que está no 'geral.css' usando JavaScript */

/* Passos:
1) crie o elemento: createElement('nomeDaTagHTML') | passe o resultado para uma variável
2) crie o atributo: createAttribute('nomeDoAtributo') | passe o resultado para uma variável 
3) use a variável com o elemento e altere o texto: nomeVariavel.textContent = "escreva aqui!";
4) use a variável com o atributo e altere o valor: nomeVariavel.value = "valor"
5) coloque o atributo no elemento: variavelElemento.setAttributeNode(variavelAtributo)
6) coloque o elemento na página: body.appendChild(nomeVariavelElemento) 
*/

// Dica: Quando você vai criar um elemento que usa CSS, você utiliza um atributo para informar o nome da classe
// Dica 2: Sempre use o console.log() para saber como sua tag está sendo montada

const div = document.createElement('div');
const body = document.querySelector('body');
div.textContent = 'escreva aqui!';
div.classList.add('divPadrao'); // Add the CSS class to the <div>
body.appendChild(div);
