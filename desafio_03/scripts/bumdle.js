"use strict";

var _usuario;

var usuario = {
  nome: "Pedro",
  idade: 19
};

function mostraInfo(usuario) {
  // template literals permite inserir variaveis dentro da string sem necessidade de concatenacoes
  console.log("".concat(nome, " tem ").concat(idade, " anos"));
} // desestruturar o objeto permite acessar propridades mais facilmente


mostraInfo((_usuario = usuario, nome = _usuario.nome, idade = _usuario.idade, _usuario));
