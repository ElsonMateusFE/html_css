const nomes = ['Charles', 'Sarah', 'Nathan']

const cursoDosAlunos = nomes.map(function(item){
    return {
        nome: item,
        curso: 'Frontend'
    }
})

console.log(cursoDosAlunos.reduce((total, itemAtual) => {
    return total += `${itemAtual.nome} `
}, ''))