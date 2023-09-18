//factory functions e constructor
//--------------------factory-------------------------
function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1= criaPessoa('joao', 'pedro');
console.log(p1);
console.log(p1.nomeCompleto);//esse sem executar ()

//------------------------constructor------------------
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);//nao permite mais alteracoes
}
const p2 = new Pessoa('joao','guerios2');
console.log(p2);
console.log();

//propertys
function Pessoa3(nome,sobrenome,estoque){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.estoque = estoque;
    Object.freeze(this);//nao permite mais alteracoes
    Object.defineProperty(this , 'estoque',{
        enumerable: true,
        value : estoque,
        writable : false,//nao deixa alterar
        configurable : true
    });
}
console.log(Object.keys(Pessoa)); //mostra as chaves 