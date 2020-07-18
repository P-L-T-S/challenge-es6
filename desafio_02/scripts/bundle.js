"use strict";

var users = [{
  nome: "Rogerio",
  idade: 18,
  curso: "Ciencia da Computacao"
}, {
  nome: "Sabrina",
  Idade: 17,
  curso: "Seguranca da informacao"
}, {
  nome: "Pedro",
  idade: 19,
  curso: "desenvolvimento de sistemas"
}];
var idades = users.map(function (item) {
  return item.Idade;
});
console.log(idades);
