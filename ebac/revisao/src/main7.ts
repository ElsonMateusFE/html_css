type aluno = {
    nome: string
    idade: number
}

const alunos: aluno[] = [
    {
        nome: 'Charles',
        idade: 12
    },
    {
        nome: 'Sarah',
        idade: 12
    }
]

alunos.push({
    nome: 'Liz',
    idade: 12
})

const novoAluno: aluno = {
    nome: 'Nathan',
    idade: 13
}

function exbibir(nomeDoAluno: aluno){
    return nomeDoAluno.nome
}