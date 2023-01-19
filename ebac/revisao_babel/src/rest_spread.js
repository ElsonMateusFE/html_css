const redesSociais = ['Facebook', 'Instagram', 'Twitter']

redesSociais.forEach((valor, indice) => {
    //console.log(`${indice} >> ${valor}`)
})

const alunos = ['Charles', 'Sarah', 'Nathan']

const cursoDosAlunos = alunos.map(item => {
    return {
        nome: item,
        curso: 'Frontend'
    }
})

cursoDosAlunos.push({
    nome: 'Elizabeth',
    curso: 'Backend'
})

const valores = [1, 2, 3]

const nomesReduce = cursoDosAlunos.reduce((total, itemAtual) => {
    return total += `${itemAtual.nome} `
}, '')

console.log(nomesReduce)