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

document.getElementById('formulario-01').addEventListener('submit', function(e){
    e.preventDefault()
    e.stopPropagation()

    let dados = new FormData(this)

    let objeto = {}

    //let notas = 0
    let notas = []

    for(let key of dados.keys()){
        objeto[key] = dados.get(key)

        notas.push(Number(dados.get(key)))
    }

    //console.log(notas)

    //console.log(objeto)

    document.getElementById('resuldado').innerHTML = aprovacao(notas)
})

