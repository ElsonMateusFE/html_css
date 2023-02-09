/*
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

class Funcionario extends Pessoa {
    #saldo = 0

    constructor(){
        super('Charles')
    }

    ganharSalario(){
        this.#saldo += 5000
    }

    exibirSalario(){
        console.log(this.#saldo)
    }
}

const contaCharles = new Funcionario()
contaCharles.ganharSalario()
contaCharles.exibirSalario()

const funcaoPromise = new Promise((resolve, reject) => {
    try{
        let ref = 0

        for(let i = 0; i < 1000000000; i++){
            ref++
        }

        resolve(ref)
    }catch(e){
        console.log('Erro no sistema')
    }
})

const promiseComParamentro = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${login} está logado`)
        }, 2000)
    })
}

async function funcaoPrincipal(){
    console.log('Início')

    promiseComParamentro('charles@gamil.com', 123).then(r => {
        console.log(r)
    })
    
    try{
        const resuldado = await funcaoPromise
        console.log(resuldado)
    }catch(e){
        console.log(e)
    }

    console.log('Fim')
}

funcaoPrincipal()

function soma(...valor){
    const soma = valor.reduce((total, itemAtual) => {
        total += itemAtual

        return total
    }, 0)

    return soma
}

const nomesMasculinos = ['Charles', 'Nathan']
const nomesFemininos = ['Liz', 'Sarah']

//console.log(nomesMasculinos.concat(nomesFemininos))
//console.log([...nomesFemininos, ...nomesMasculinos])

const dadosCharles = {
    nome: 'Charles',
    idade: 12
}

const dadosNathan = {
    ...dadosCharles,
    idade: 14
}

const { idade: idadeDoNathan } = dadosNathan
console.log(idadeDoNathan)

const nomes = [ 'Charles', 'Nathan', 'Liz', 'Sarah' ]

const [nome1, nome2, ...nomesRestantes] = nomes
console.log(nomesRestantes)

const nomes = [ 'Charles', 'Nathan', 'Liz', 'Sarah', 'Sarah' ]

const nomesSet = new Set([...nomes])
const nomesArray = [...nomesSet]
//console.log(nomesArray)

let meusDados = new Map()

meusDados.set('nome', 'Sarah')
meusDados.set('sobrenome', 'Cooper, Miller')

for(let [keys, values] of meusDados.entries()){
    console.log(`${keys} >> ${values}`)
}

const novosNomes = new Set()

novosNomes.add('Charles').add('Sarah')

console.log(novosNomes)
*/

const nomes = ['Charles', 'Nathan', 'Liz', 'Sarah']

//nomes.forEach((itemAtual, indice) => console.log(`${indice + 1} >> ${itemAtual}`))

const cursoDosAlunos = nomes.map(itemAtual => ({
    nome: itemAtual,
    curso: 'Frontend'
}))

cursoDosAlunos.push({
    nome: 'Liz',
    curso: 'Backend'
})

const filtrarFrontend = item => item.curso === 'Frontend'

console.log(cursoDosAlunos.filter(filtrarFrontend))

const num = [1, 2, 3]
//console.log(num.map(item => item ** 2))

const nomesJuntos = cursoDosAlunos.reduce((total, itemAtual) => {
    total += `${itemAtual.nome} `

    return total
}, '')

console.log(nomesJuntos)