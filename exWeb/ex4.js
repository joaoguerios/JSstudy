const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function inverte(oque) {
    let aux = 0;
    let tamanho = oque.length - 1;
    for (i = 0; i < (oque.length / 2); i++) {
        aux = array[i];
        array[i] = array[(tamanho)];
        array[(tamanho)] = aux;
        tamanho--;
    }
    return array;
}
console.log(`antes ${array}`)
console.log(`depois ${inverte(array)}`);