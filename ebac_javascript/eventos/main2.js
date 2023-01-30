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

    if(this.getAttribute('class').match(/erro/)){
        return false
    }

    let dados = new FormData(this)

    //let notas = 0
    let notas = []

    for(let key of dados.keys()){

        //let numero = Number(dados.get(key))
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0

        if(!isNaN(numero)){
            notas.push(numero)
        }
    }

    console.log(notas)
    
    document.getElementById('resuldado').innerHTML = aprovacao(notas)
})

function validaCampo(elemento){
    elemento.addEventListener('blur', function(e){
        e.preventDefault()
    
        if(this.value == ''){
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em vermelho'
            this.classList.add('erro')
            this.parentNode.classList.add('erro')
            return false
        }else{
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro')
        }
    })
}

function validaCampoNumerico(elemento){
    elemento.addEventListener('blur', function(e){
        e.preventDefault()
    
        if(this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
            document.querySelector('.mensagem').innerHTML = ''
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro')
        }else{
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em destaque'
            this.classList.add('erro')
            this.parentNode.classList.add('erro')
            return false
        }
    })
}

//blur é o oposto de focus
let camposObrigatorios = document.querySelectorAll('input.obrigatoria')
let camposNumericos = document.querySelectorAll('input.numero')

for(let emFoco of camposObrigatorios){
    validaCampo(emFoco)
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco)
}