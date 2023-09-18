//splice cria um novo array com os elementos removidos 
//              0     1     2      3     4
const nomes = ["joao","pedro","costa","guerios","gi"];
//sitaxe
//nome.splice(indice,delete,elemento,elemento)
//indice=qual ou a apartir de qual elemento
//delele=quantos elementos remove
//elemento adiciona elemento para o lugar do removido


const novo = nomes.splice(-1,1,"gigica");
console.log(nomes, novo);
// [ 'joao', 'pedro', 'costa', 'guerios', 'gigica' ] [ 'gi' ]
const novos = nomes.splice(0,0,"gigica");
console.log(nomes, novos);
//[ 'gigica', 'joao', 'pedro', 'costa', 'guerios', 'gigica' ] []


//concat
nu1=[1,2,3];
nu2=[4,5,6];
nu3=nu1.concat(nu2);
nu4=nu1+nu2;
console.log(nu3);
//[ 1, 2, 3, 4, 5, 6 ]
console.log(nu4);//errado pq entende como string 
//1,2,34,5,6

//filter  retorna true ou false
const numeros = [0,1,2,3,4,5,6,7,8,9,10];
const filtrados = numeros.filter(valor => valor > 5);

console.log(filtrados);
//[ 6, 7, 8, 9, 10 ]
//lembrar .toLowerCase() e endsWith()

//map
const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapeados = numeros.map(valor => valor * 2);
console.log(mapeados);

//colocando ids sem afetar 
//const sla = sla.map(function(obj,indice){
//  const new = {...obj};
//  newobj.id = indice;
//  return newobj;})

//reduce reduz o array a um elemento so 
const total= numeros.reduce(function(acumulador,valor,indice,array){
    return acumulador += valor;
});
console.log(total);
