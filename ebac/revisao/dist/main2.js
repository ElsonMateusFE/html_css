"use strict";

var alunos = [{
  nome: 'Charles',
  curso: ['Front-end', 'UX/UI'],
  idade: 12
}, {
  nome: 'Sarah',
  curso: ['Front-end', 'UX/UI'],
  idade: 12
}];
alunos.push({
  nome: 'Liz',
  idade: 10
});
var novoAluno = {
  nome: 'Nathan',
  curso: ['Backend', 'UX/UI'],
  idade: 20
};
function exibir(nomeDoAluno) {
  console.log(nomeDoAluno.nome);
}