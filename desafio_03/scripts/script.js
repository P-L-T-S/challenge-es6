const usuario = {
    nome: "Pedro",
    idade: 19
};

function mostraInfo(usuario){
    // template literals permite inserir variaveis dentro da string sem necessidade de concatenacoes
    console.log(`${nome} tem ${idade} anos`);
}
// desestruturar o objeto permite acessar propridades mais facilmente
mostraInfo({nome,idade} = usuario);