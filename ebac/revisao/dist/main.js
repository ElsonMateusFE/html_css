"use strict";

var nomes = ['Elizabeth', 'Sarah', 'Charles', 'Nathan'];
var cursoDosAlunos = nomes.map(function (item) {
  return {
    nome: item,
    curso: 'Frontend'
  };
});
cursoDosAlunos.push({
  nome: 'Elizabeth',
  curso: 'Backend'
});
console.log(cursoDosAlunos.reduce(function (total, indece) {
  total += "".concat(indece.nome, " ");
  return total;
}, ''));