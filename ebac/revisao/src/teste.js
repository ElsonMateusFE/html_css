const nomes = ['Charles', 'Sarah']

const nomesDoCurso = nomes.map(item => ({
    nome: item,
    curso: 'Frontend'
}))

nomesDoCurso.push({
    nome: 'Liz',
    curso: 'Backend'
})

console.log(nomesDoCurso.reduce((total, item) => {
    total += `${item.nome} `

    return total
}, ''))