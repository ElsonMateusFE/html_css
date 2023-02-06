"use strict";

var nomes = ['Charles', 'Sarah'];
var nomesDoCurso = nomes.map(function (item) {
  return {
    nome: item,
    curso: 'Frontend'
  };
});
nomesDoCurso.push({
  nome: 'Liz',
  curso: 'Backend'
});
console.log(nomesDoCurso.reduce(function (total, item) {
  total += "".concat(item.nome, " ");
  return total;
}, ''));