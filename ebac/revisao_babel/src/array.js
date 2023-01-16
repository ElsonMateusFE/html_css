const redesSociais = ['Instagram', 'Twitter', 'Facebook']

redesSociais.forEach(function(item, indice){
    //console.log(`${indice} - tenho ${item}`)
})

const alunos = ['Charles', 'Sarah', 'Nathan']

const cursoDosAlunos = alunos.map(function(item){
    return {
        nome: item,
        curso: 'Frontend'
    }
})

cursoDosAlunos.push({
    nome: 'Eric',
    curso: 'Backend'
})

//console.log(cursoDosAlunos)

const num = [1, 2, 3, 4]

const dobroDosNum = num.map(function(item){
    return item * 2
})

//console.log(dobroDosNum)

const encontraSarah = cursoDosAlunos.findIndex(function(item){
    return item.nome === 'Sarah'
})

//console.log(encontraSarah)

const encontraAlunosFrontend = cursoDosAlunos.every(function(item){
    return item.curso === 'Frontend'
})

//console.log(encontraAlunosFrontend)

const peloMenosUmBackend = cursoDosAlunos.some(function(item){
    return item.curso === 'Backend'
})

//console.log(peloMenosUmBackend)

const filterFrontend = nome => nome.curso === 'Frontend'

const buscaAlunosFrontend = cursoDosAlunos.filter(filterFrontend)

//console.log(buscaAlunosFrontend)

const soma = num.reduce(function(total, itemAtual){
    total += itemAtual

    return total
}, 0)

//console.log(soma)

const todosOsNome = cursoDosAlunos.reduce(function(total, itemAtual){
    total += `${itemAtual.nome} `

    return total
}, '')

console.log(todosOsNome)