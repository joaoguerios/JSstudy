/* Crie uma imagem usando JavaScript */

/* Passos:
1) crie o elemento: createElement('nomeDaTagHTML') | passe o resultado para uma variável
2) crie o atributo: createAttribute('nomeDoAtributo') | passe o resultado para uma variável 
3) use a variável com o atributo e altere o valor: nomeVariavel.value = "valor"
4) coloque o atributo no elemento: variavelElemento.setAttributeNode(variavelAtributo)
5) coloque o elemento na página: body.appendChild(nomeVariavelElemento) 
*/

// Dica: Quando você vai criar uma imagem você usa um atributo cujo valor é o caminho até a imagem
// Dica 2: Sempre use o console.log() para saber como sua tag está sendo montada

const img = document.createElement('img');
const bodyy = document.querySelector('body');
const atribute = document.createAttribute('src')
atribute.value="..\Imagem\UFPR.png";
img.setAttributeNode(atribute);
bodyy.appendChild(img);