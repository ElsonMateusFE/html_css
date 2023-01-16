const redesSociais = ['Facebook', 'Instagram', 'Twitter']

for(let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na redde social: ${redesSociais[i]}`)
}

// forEach só faz iteraçao, ele não retorna nada
redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na redde social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

// Map conseguimos iterar, modificar e retornar
const alunos2 = alunos.map(function(itemAtual){
    //itemAtual = {
    //    nome: itemAtual,
    //    curso: 'Frontend'
    //}
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }

    //return itemAtual
})

console.log(alunos2)

const numeros = [1, 2, 3, 4, 5]

const dobroDosNumero = numeros.map(function(numeroAtual){
    //numeroAtual = numeroAtual * 2
    return numeroAtual * 2
})

console.log(dobroDosNumero)

//Find
const paula = alunos2.find(function(item){
    return item.nome === 'Paula' // true false
})

console.log(paula)

//Findindex
const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome === 'Paula' // true false
})

console.log(indiceDaPaula)

// Every (push)
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

// Every
const todosAlunosDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend'
})

console.log(todosAlunosDeFrontend)

//Some (existe pelo menos um)
const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend)

//Filter
function filtraAlunosDeBackend(aluno){
    return aluno.curso === 'Backend'
}

//Filter com Arrow Fucntion
const filtraAlunosDeBackend2 = aluno => aluno.curso === 'Backend'

//const filtraAlunosDeBackend2 = (aluno, indice) => aluno.curso === 'Backend'

//Filter atráves de função anonima
const alunosDeBackend = alunos2.filter(function(item){
    return item.curso === 'Backend'
})

//Filter atráves de função externa
const alunosDeBackend2 = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)
console.log(alunosDeBackend2)

// Reduce
const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador
}, 0)

console.log(soma)

//Usando for
let somaComFor = 0

for(let i = 0; i < nums.length; i ++){
    somaComFor += nums[i]
}

console.log(somaComFor)

//Usando redduce com string
const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `
    return acumulador
}, '')

console.log(nomesDosAlunos)