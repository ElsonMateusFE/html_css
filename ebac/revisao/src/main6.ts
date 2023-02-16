type aluno = {
    nome: string,
    idade: number
}

const alunos: aluno[] = [
    {
        nome: 'Charles',
        idade: 12
    },
    {
        nome: 'Sarah',
        idade: 10
    }
]

const novoAluno: aluno = {
    nome: 'Nathan',
    idade: 15
}

alunos.push({
    nome: 'Liz',
    idade: 12
})

function exibirNomeDoAluno(nomeDoAluno: aluno){
    return nomeDoAluno.nome
}