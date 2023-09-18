const produto = {nome : 'caneca', preco : 3};
const outro = {...produto, adicionei : 5};

console.log(produto);   //{ nome: 'caneca', preco: 3 }
console.log(outro);     //{ nome: 'caneca', preco: 3, adicionei: 5 }

outro.nome = 'copo';
outro.preco = 10;

console.log(produto); //{ nome: 'caneca', preco: 3 }
console.log(outro);   //{ nome: 'copo', preco: 10, adicionei: 5 }

