const texto = 'aula de web1'

function substr(str,trecho){
    const tamanhostr = str.length -1
    const tamanhotrecho = trecho.length -1
    let contador = 0;
    for (i=0;i<=tamanhostr;i++){
        let igualdade = true;
        for(j=0;j<=tamanhotrecho;j++){
            if(str[i+j]!= trecho[j]){
                igualdade = false;
                break;
            }
        }
        if(igualdade){
            return i;
        }
    }
    return -1;
}
console.log(substr(texto,"web1"))
console.log(substr(texto,"sla"))