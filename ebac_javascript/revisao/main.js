function validaCampoObrigatorio(valor){
    valor.addEventListener('blur', function(e){
        e.preventDefault()

        if(this.value === ''){
            this.classList.add('erro')
        }else{
            this.classList.remove('erro')
        }
    })
}

function validaCampoCep(valor){
    valor.addEventListener('blur', function(e){
        e.preventDefault()

        const condicao = /^[0-9]{5}[-][0-9]{3}$/

        if(this.value.match(condicao)){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
        }
    })
}

function validaCampoEmail(valor){
    valor.addEventListener('blur', function(e){
        e.preventDefault()

        const condicao = /^[a-z0-9]+@[a-z0-9]+.[a-z]*$/i

        if(this.value.match(condicao)){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
        }
    })
}

const campoObrigatorio = document.querySelectorAll('input.obrigatoria')
const campoCep = document.querySelectorAll('input.cep')
const campoEmail = document.querySelectorAll('input.email')

for(let campo of campoObrigatorio){
    validaCampoObrigatorio(campo)
}

for(let campo of campoCep){
    validaCampoCep(campo)
}

for(let campo of campoEmail){
    validaCampoEmail(campo)
}