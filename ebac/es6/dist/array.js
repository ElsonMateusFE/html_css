"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na redde social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na redde social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumero = numeros.map(function (numeroAtual) {
  numeroAtual = numeroAtual * 2;
  return numeroAtual;
});
console.log(dobroDosNumero);