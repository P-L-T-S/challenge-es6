// cria o array
const arr = [1,2,3,4,5,6];
// x recebe a primeira posicao
// y recebe as outras posicoes
const [x, ...y] = arr;
console.log(x);
console.log(y);