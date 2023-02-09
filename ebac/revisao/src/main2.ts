type aluno = {
    nome: string
    curso?: string[]
    idade: number
}

const alunos: aluno[] = [
    {
        nome: 'Charles',
        curso: ['Front-end', 'UX/UI'],
        idade: 12
    },
    {
        nome: 'Sarah',
        curso: ['Front-end', 'UX/UI'],
        idade: 12
    }
]

alunos.push({
    nome: 'Liz',
    idade: 10
})

const novoAluno = {
    nome: 'Nathan',
    curso: ['Backend', 'UX/UI'],
    idade: 20
}

function exibir(nomeDoAluno: aluno): void{
    console.log(nomeDoAluno.nome)
}