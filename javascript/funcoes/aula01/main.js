function calculoMedia(notas){

    let soma = 0

    for(c = 0; c < notas.length; c++){
        soma += notas[c]
    }

    media = soma / notas.length

    return media
}

//function aprovacao(media){
function aprovacao(notas){

    let media = calculoMedia(notas)

    let condicao = media >= 7 ? 'Aprovado' : 'Reprovado'

    return `Média: ${media} - Resuldado: ${condicao}`
}

console.log(calculoMedia([8, 8]))
//console.log(aprovacao(calculoMedia([8, 8])))
console.log(aprovacao([8, 8]))