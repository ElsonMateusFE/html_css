"use strict";
const alunos = [
    {
        nome: 'Charles',
        idade: 12
    },
    {
        nome: 'Sarah',
        idade: 10
    }
];
const novoAluno = {
    nome: 'Nathan',
    idade: 15
};
alunos.push({
    nome: 'Liz',
    idade: 12
});
function exibirNomeDoAluno(nomeDoAluno) {
    return nomeDoAluno.nome;
}
