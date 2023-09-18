const _dinheiro = Symbol(); //evita acessos de fora do objeto

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this[_dinheiro] = 0;
    }
    falar() {
        console.log(`${this.nome} esta falando`);
    }

    get dinheiro(){
        console.log('getter');
        return this[_dinheiro];
    }

    set dinheiro(valor){
        console.log('setter');
        if (typeof valor !== 'number'){
            console.log('nao foi possivel adicionar');
            return;
        }
        console.log(`adicionei ${valor}`)
        this[_dinheiro] = valor;
        return this[_dinheiro];
    }
}

// const p1 = new Pessoa('joao', 'guerios');
// console.log(p1);
// p1.falar();
// const p2 = new Pessoa('vitu', 'giulios');
// console.log(p2);
// p2.falar();
// console.log(p1.dinheiro);
// p1.dinheiro = 99; //setter
// console.log(p1.dinheiro);

class Filho extends Pessoa{
    constructor(nome,sobrenome,pai){
        super(nome,sobrenome); //serve para ligar os this ja atribuidos na classe pai
        this.pai=pai;
    }
} //filho herda tudo que Pessoa tem

const f1 = new Filho('joao', 'filho', 'cicero');
console.log(f1)
