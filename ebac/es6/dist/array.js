"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na redde social: ".concat(redesSociais[i]));
}

// forEach só faz iteraçao, ele não retorna nada
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na redde social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

// Map conseguimos iterar, modificar e retornar
var alunos2 = alunos.map(function (itemAtual) {
  //itemAtual = {
  //    nome: itemAtual,
  //    curso: 'Frontend'
  //}
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };

  //return itemAtual
});

console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumero = numeros.map(function (numeroAtual) {
  //numeroAtual = numeroAtual * 2
  return numeroAtual * 2;
});
console.log(dobroDosNumero);

//Find
var paula = alunos2.find(function (item) {
  return item.nome === 'Paula'; // true false
});

console.log(paula);

//Findindex
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome === 'Paula'; // true false
});

console.log(indiceDaPaula);

// Every (push)
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});

// Every
var todosAlunosDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosDeFrontend);

//Some (existe pelo menos um)
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);

//Filter
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}

//Filter com Arrow Fucntion
var filtraAlunosDeBackend2 = function filtraAlunosDeBackend2(aluno) {
  return aluno.curso === 'Backend';
};

//const filtraAlunosDeBackend2 = (aluno, indice) => aluno.curso === 'Backend'

//Filter atráves de função anonima
var alunosDeBackend = alunos2.filter(function (item) {
  return item.curso === 'Backend';
});

//Filter atráves de função externa
var alunosDeBackend2 = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
console.log(alunosDeBackend2);

// Reduce
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

//Usando for
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);

//Usando redduce com string
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);