/* 
// manipulando arrays
const arr = [1,2,3,4,5,6,7,8,9];
// map() é o metodo utilizado para percorrer vetores
const newArr = arr.map((item, index) => {
    return item + index;
});
// converte o vetor em uma unico valor.
const sum = arr.reduce((total, next) => {
    return total + next;
})
// filtra os itens desejados e cria um novo array
const filtered = arr.filter((item) => {
    return item % 2 === 0;
})
// procura um item que seja igual ao valor passado por parametro
const find = arr.find(item => {
    return item === 8;
})
console.log(find);
 */

/* 
// desestruturacao
const usuario = {
    nome: "Pedro",
    sobrenome: "teixeira",
    idade: 19,
    endereco: {
        cep: "06700-453",
        cidade: "Cotia",
        estado: "SP",
    },
  };
  const { nome, idade, endereco: {cep, cidade}} = usuario;
  console.log(nome, idade, cep, cidade);
*/

/*
// REST, seleciona as propriedades que não foram especificadas automanticamente.
// REST, Seleciona o resto
 const usuario ={ 
    nome: "Pedro",
    sobrenome: "teixeira",
    idade: 19,
    endereco: {
        cep: "06700-453",
        cidade: "Cotia",
        estado: "SP",
    },
}
const {endereco, ...atributos} = usuario;
console.log(atributos);
console.log(endereco); 
 
const arr = [1,3,5,7,9];

const [a, b , ...c] = arr;
console.log(a);
console.log(b);
console.log(c);
function soma(...parametros){
    return parametros.reduce((total, next) => total + next);
}
console.log(soma(10, 20));*/
/* 
//SPREAD == PROPAGAR
//SPREAD seleciona informações de uma propriedade e copia em outra propriedade
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); */
const usuario = {
    nome: "Pedro",
    sobrenome: "Teixeira",
    idade: 19,
};
const usuario2 = {...usuario, cep: "06700453"}
console.log(usuario);
console.log(usuario2);