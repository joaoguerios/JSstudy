const pessoa1 = new Object;
pessoa1.nome = 'joao';
pessoa1.sobrenome= 'guerios';
pessoa1.FalaAlgo= function(){
    return(`${this.nome} esta falando algo`)};
pessoa1.idade = 35;
pessoa1.Nascimento=function(){
    const anoAtual = new Date();
    return anoAtual.getFullYear() - this.idade;
};
console.log(pessoa1.FalaAlgo());
console.log(pessoa1.Nascimento());

//ver as chaves
for (let chave in pessoa1){
    console.log(chave);
}
//ver os valores
for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

