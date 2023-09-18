//--------------prototype--------------
function produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
};
preco.prototype.Aumenta = function(quanto){
    return this.preco += quanto;
};
preco.prototype.Disconta = function(quanto){
    return this.preco -= quanto;
};

function camisa(nome,preco,cor){
    produto.call(this, nome, preco)
}
 

const camiseta = new camisa('camisa', 50, 'azul'); 
console.log(camisa);