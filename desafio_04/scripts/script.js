// cria o array
const user = {
    nome: "Pedro",
    idade: 19,
    endereco: {
        cidade: "Cotia",
        uf: "SP",
        pais: "Brasil"
    }
};
// nome recebe a primeira propriedade
// idade recebe a segunda posicao
// resto recebe o resto
const {nome, idade,...resto} = user;
const {endereco:{cidade, uf, pais}} = resto;

console.log(nome, idade);
console.log(cidade, uf, pais);

// user2 recebe todas as informacoes de user
// user2 sobrepoe o atributo nome
const user2 = {
    ...user,
    nome: "roger"
};
console.log(user2);
// user3 recebe todas as informacoes de user
const user3 = {
    ...user,
}
// user3 sobrepoe a informacao de user
user3.endereco.cidade = "Caucaia";
console.log(user3);

// parametros recebe todos os parametros em forma de vetor
function soma(...parametros){
    // metodo reduce converte um vetor em um unico elemento
    return parametros.reduce((total,next) => total + next);
};