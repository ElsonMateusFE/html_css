"use strict";
const alunos = [
    {
        nome: 'Charles',
        idade: 12
    },
    {
        nome: 'Sarah',
        idade: 12
    }
];
alunos.push({
    nome: 'Liz',
    idade: 12
});
const novoAluno = {
    nome: 'Nathan',
    idade: 13
};
function exbibir(nomeDoAluno) {
    return nomeDoAluno.nome;
}
