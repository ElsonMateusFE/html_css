function somaMedia(notas){
    let nota = 0

    for(let i = 0; i < notas.length; i++){
        nota += notas[i]
    }

    return nota / notas.length
}

function aprovadoReprovado(notas){
    const media = somaMedia(notas)

    const verificacao = media >= 7 ? 'Aprovado' : 'Reprovado'

    return `Média: ${media} - Resuldado: ${verificacao}`
}

const form1 = document.querySelector('#formulario-01')

form1.addEventListener('submit', function(e){
    e.preventDefault()

    if(this.getAttribute('class').match(/error/)){
        return false
    }
    
    const dados = new FormData(this)

    const notas = []

    for(let nota of dados.values()){

        const condicao = nota.match(/[0-9]/) ? Number(nota) : 0

        if(!isNaN(condicao)){
            notas.push(condicao)
        }
    }

    console.log(notas)

    document.querySelector('#resuldado').innerHTML = aprovadoReprovado(notas)
})

function verificaCampo(valor){
    valor.addEventListener('focusout', function(e){
        e.preventDefault()
    
        if(this.value === ''){
            this.classList.add('erro')
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho'

            return false
        }else{
            this.classList.remove('erro')
            this.parentNode.classList('erro')
            document.querySelector('.mensagem').innerHTML = ''
        }
    })
}

function verificaCampoNumerico(valor){
    valor.addEventListener('focusout', function(e){
        e.preventDefault()

        const numero = this.value.match(/^[0-9]{5}+[-][0-9]{3}$/)
        const condicao = this.value !== '' && this.value.match(/[0-9]/) && this.value >= 0 && this.value <= 10
    
        if(condicao){
            this.classList.remove('erro')
            document.querySelector('.mensagem').innerHTML = ''
        }else{
            this.classList.add('erro')
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho'

            return false
        }
    })
}

const campoObrigatorio = document.querySelectorAll('input.obrigatoria')
const campoObrigatorioNumerico = document.querySelectorAll('input.numero')
const campoEmail = document.querySelector('input.email')

for(let campo of campoObrigatorio){
    verificaCampo(campo)
}

for(let campo of campoObrigatorioNumerico){
    verificaCampoNumerico(campo)
}

for(let campo of campoEmail){

}