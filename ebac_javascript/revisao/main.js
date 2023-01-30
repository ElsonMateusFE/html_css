function somaEMedia(notas){
    let soma = 0

    for(let i = 0; i < notas.length; i++){
        soma += notas[i]
    }

    return soma / notas.length
}

function verificacao(notas){
    const media = somaEMedia(notas)

    const verificacao = media >= 7 ? 'Aprovado' : 'Reprovado'

    return `${media} - ${verificacao}`
}

const form = document.querySelector('#formulario-01')

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(this.getAttribute('class').get('erro')){
        return false
    }
    
    const dados = new FormData(this)

    let notas = []

    for(let nota of dados.values()){
        const condicao = nota.match(/\d*/) ? Number(nota) : 0

        if(!isNaN(condicao)){
            notas.push(condicao)
        }
    }

    document.querySelector('#resuldado').innerHTML = verificacao(notas)
})

function verificacaoDeCampoObrigatorio(campo){
    campo.addEventListener('blur', function(e){
        e.preventDefault()
    
        if(this.value === ''){
            this.classList.add('erro')
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em vermelho'

            return false
        }else{
            this.classList.remove('erro')
            document.querySelector('.mensagem').innerHTML = ''
        }
    })
}

function verificacaoDeCampoNumerico(campo){
    campo.addEventListener('blur', function(e){
        e.preventDefault()
    
        if(this.value !== '' && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
            this.classList.remove('erro')
            document.querySelector('.mensagem').innerHTML = ''
        }else{
            this.classList.add('erro')
            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em destaque'
            this.parentNode.classList.add('erro')
            return false
        }
    })
}

const camposObrigatorios = document.querySelectorAll('input.obrigatoria')
const camposNumericos = document.querySelectorAll('input.numero')

for(let campo of camposObrigatorios){
    verificacaoDeCampoObrigatorio(campo)
}

for(let campo of camposNumericos){
    verificacaoDeCampoNumerico(campo)
}