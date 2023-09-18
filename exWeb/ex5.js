const texto = 'aula de web1'

function contaApar(str,letra){
    const tamanho = str.length -1
    let contador = 0;
    for (i=0;i<=tamanho;i++){
        if(str[i]==letra){
            contador++
        }
    }
    return contador;
}
console.log(contaApar(texto,"a"))