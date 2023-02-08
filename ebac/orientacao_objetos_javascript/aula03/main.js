const nome = 'Elson'
const idade = 25
const trabalhando = true
const conhecimento = ['html', 'css', 'js']

const pessoa = {
    nome,
    idade,
    trabalhando,
    conhecimento,
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome')

//pessoa.sobrenome = 'Mateus'
pessoa['sobrenome'] = undefined

//Congela os atributos dentro das constantes
Object.freeze(pessoa)

// Congela apenas uma propriedade
Object.defineProperties(pessoa, 'nome', {
    enumerable: true,
    whitable: false,
    value: 'Charles'
})

pessoa.nome = 'Charles'

if(pessoa['sobrenome']){
    console.log('a pessoas tem um sobrenome')
}

if('sobrenome' in pessoa){
    console.log('Tem sobrenome')
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa).length)

console.log(Object.values(pessoa))
console.log(Object.values(pessoa).length)