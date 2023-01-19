"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
redesSociais.forEach(function (valor, indice) {
  //console.log(`${indice} >> ${valor}`)
});
var alunos = ['Charles', 'Sarah', 'Nathan'];
var cursoDosAlunos = alunos.map(function (item) {
  return {
    nome: item,
    curso: 'Frontend'
  };
});
cursoDosAlunos.push({
  nome: 'Elizabeth',
  curso: 'Backend'
});
var valores = [1, 2, 3];
var nomesReduce = cursoDosAlunos.reduce(function (total, itemAtual) {
  return total += "".concat(itemAtual.nome, " ");
}, '');
console.log(nomesReduce);