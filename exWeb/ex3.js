const array = [1, 2, 3, 4, 5, 6];
function soma(oque) {
    let soma = 0;
    for (i = 0; i < oque.length; i++) {
        soma += oque[i];
    }
    return soma;
}
console.log(soma(array));