const nomes = [ 'Elizabeth', 'Sarah', 'Charles', 'Nathan' ]

const cursoDosAlunos = nomes.map(item => ({
    nome: item,
    curso: 'Frontend'
}))

cursoDosAlunos.push({
    nome: 'Elizabeth',
    curso: 'Backend'
})

console.log(cursoDosAlunos.reduce((total, indece) => {
    total += `${indece.nome} `

    return total
}, ''))