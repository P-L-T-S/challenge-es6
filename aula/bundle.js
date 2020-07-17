"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var usuario = {
  nome: "Pedro",
  sobrenome: "Teixeira",
  idade: 19
};

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  cep: "06700453"
});

console.log(usuario);
console.log(usuario2);
