"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// cria o array
var user = {
  nome: "Pedro",
  idade: 19,
  endereco: {
    cidade: "Cotia",
    uf: "SP",
    pais: "Brasil"
  }
}; // nome recebe a primeira propriedade
// idade recebe a segunda posicao
// resto recebe o resto

var nome = user.nome,
    idade = user.idade,
    resto = _objectWithoutProperties(user, ["nome", "idade"]);

var _resto$endereco = resto.endereco,
    cidade = _resto$endereco.cidade,
    uf = _resto$endereco.uf,
    pais = _resto$endereco.pais;
console.log(nome, idade);
console.log(cidade, uf, pais); // user2 recebe todas as informacoes de user
// user2 sobrepoe o atributo nome

var user2 = _objectSpread(_objectSpread({}, user), {}, {
  nome: "roger"
});

console.log(user2); // user3 recebe todas as informacoes de user

var user3 = _objectSpread({}, user); // user3 sobrepoe a informacao de user


user3.endereco.cidade = "Caucaia";
console.log(user3); // parametros recebe todos os parametros em forma de vetor

function soma() {
  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {
    parametros[_key] = arguments[_key];
  }

  // metodo reduce converte um vetor em um unico elemento
  return parametros.reduce(function (total, next) {
    return total + next;
  });
}

;
