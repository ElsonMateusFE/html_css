function somaEMedia(notas){
    let soma = 0

    for(let i = 0; i < notas.length; i++){
        soma += notas[i]
    }

    return soma / notas.length
}

function aprovacao(notas){
    
    const media = somaEMedia(notas)

    const verificao = media >= 7 ? 'Aprovado' : 'Reprovado'

    return `${media} - ${verificao}`
}

const form1 = document.querySelector('#formulario-01')

function verificacaoDeCampoObrigatorio(input){
    input.addEventListener('focusout', function(e){
        e.preventDefault()
    
        if(this.value === ''){
            this.classList.add('erro')
            return false
        }else{
            this.classList.remove('erro')
        }
    })
}

function verificacaoDeCampoNumerico(input){
    input.addEventListener('focusout', function(e){
        e.preventDefault()
    
        const condicao = this.value !== '' && this.value.match(/[0-9]/) && this.value >= 0 && this.value <= 10

        if(condicao){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
            return false
        }
    })
}

function verificacaoDeEmail(input){
    input.addEventListener('focusout', function(e){
        e.preventDefault()
    
        //nome@gmail.com
        const condicao = /^[a-z0-9]*[@][a-z]*[.][a-z]*$/

        if(this.value.match(condicao) && this.value != ''){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
            return false
        }
    })
}

function verificacaoDeCep(input){
    input.addEventListener('focusout', function(e){
        e.preventDefault()

        const condicao = /^[0-9]{5}[-][0-9]{3}$/

        if(this.value.match(condicao) && this.value != ''){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
            return false
        }
    })
}

function verificacaoDeUf(input){
    input.addEventListener('focusout', function(e){
        e.preventDefault()

        const condicao = /^[A-Z]{2}$/

        if(this.value.match(condicao) && this.value != ''){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
            return false
        }
    })
}

const campoObrigatoria = document.querySelectorAll('input.obrigatoria')
const campoNumero = document.querySelectorAll('input.numero')
const campoEmail = document.querySelectorAll('input.email')
const campoCep = document.querySelectorAll('input.cep')
const campoUf = document.querySelectorAll('input.uf')

for(let campo of campoObrigatoria){
    verificacaoDeCampoObrigatorio(campo)
}

for(let campo of campoNumero){
    verificacaoDeCampoNumerico(campo)
}

for(let campo of campoEmail){
    verificacaoDeEmail(campo)
}

for(let campo of campoCep){
    verificacaoDeCep(campo)
}

for(let campo of campoUf){
    verificacaoDeUf(campo)
}