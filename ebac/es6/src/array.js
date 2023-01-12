const redesSociais = ['Facebook', 'Instagram', 'Twitter']

for(let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na redde social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na redde social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

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

const paula = alunos2.find(function(item){
    return item.nome == 'Paula' // true false
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula' // true false
})

console.log(indiceDaPaula)