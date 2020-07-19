// importa todas as funcoes de funcoes e retorna no objeto funcoes
import * as funcoes from "./funcoes"
// desestrutura o objeto para cada função ser inserida em uma constante
const {soma, sub, div, mult} = funcoes;

console.log(soma(4,4));
console.log(sub(4,4));
console.log(div(4,4));
console.log(mult(4,4));