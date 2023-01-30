"use strict";

var nomes = ['Charles', 'Sarah', 'Nathan'];
var cursoDosAlunos = nomes.map(function (item) {
  return {
    nome: item,
    curso: 'Frontend'
  };
});
console.log(cursoDosAlunos.reduce(function (total, itemAtual) {
  return total += "".concat(itemAtual.nome, " ");
}, ''));