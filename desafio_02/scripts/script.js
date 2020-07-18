// array a ser percorrido
const users = [
    {
        nome: "Rogerio",
        idade: 18,
        curso: "Ciencia da Computacao"
    },
    {
        nome: "Sabrina",
        idade: 17,
        curso: "Seguranca da informacao"
    },
    {
        nome: "Pedro",
        idade: 19,
        curso: "Desenvolvimento de sistemas"
    }
];
// metodo map percorre todos os itens do array
const idades = users.map(item => item.idade);
console.log(idades);
// metodo filter percorre o array e cria um  novo array com os itens que tiverem um retorno verdadeiro
const adultos = users.filter(item => item.idade >= 18);
console.log(adultos);
// find percorre o array e retorna um valor caso encontre um item correspondente
// O item tem q ser exatamente igual para o find encontrar
const procuraCurso = users.find(item => item.curso === "Seguranca da informacao");
console.log(procuraCurso);