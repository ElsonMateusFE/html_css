function somaEMedia(notas){
    let nota = 0

    for(let i = 0; i < notas.length; i++){
        nota += notas[i]
    }

    return nota / notas.length
}

function resuldado(notas){
    const media = somaEMedia(notas)

    const resuldado = media >= 7 ? 'Aprovado' : 'Reprovado'

    return `Média: ${media} >>> Resuldado: ${resuldado}`
}

function verificaCampoObrigatorio(input){
    input.addEventListener('blur', function(){
        
        if(this.value === ''){
            this.classList.add('erro')
            document.querySelector('.mensagem').innerHTML = 'Verifique campos em vermelho'
        }else{
            this.classList.remove('erro')
            document.querySelector('.mensagem').innerHTML = ''
        }
    })
}

function verificaCampoNumerico(input){
    input.addEventListener('blur', function(){
        
        const condicao = this.value !== '' && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10

        if(condicao){
            this.classList.remove('erro')
            document.querySelector('.mensagem').innerHTML = ''
        }else{
            this.classList.add('erro')
            document.querySelector('.mensagem').innerHTML = 'Verifique campos em vermelho'
        }
    })
}

function verificaEmail(input){
    input.addEventListener('blur', function(){
        
        // nome@gmail.com
        const condicao = /^[a-z0-9]*+[@][a-z0-9]*+[.][a-z0-9]*$/
        ///^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i

        if(this.value.match(condicao)){
            this.classList.remove('erro')
            document.querySelector('.mensagem').innerHTML = ''
        }else{
            this.classList.add('erro')
            document.querySelector('.mensagem').innerHTML = 'Verifique campos em vermelho'
        }
    })
}

const campoEmail = document.querySelectorAll('input.email')

for(let campo of campoEmail){
    verificaEmail(campo)
}