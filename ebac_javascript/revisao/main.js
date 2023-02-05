const campoNome = document.querySelectorAll('input.nome')
const campoCep = document.querySelectorAll('input.cep')
const campoEmail = document.querySelectorAll('input.email')

for(let campo of campoNome){
    validacao(campo)
}

for(let campo of campoCep){
    validacaoDeCep(campo)
}

for(let campo of campoEmail){
    validacaoDeEmail(campo)
}

function validacao(valor){
    valor.addEventListener('blur', function(){
        if(this.value === ''){
            this.classList.add('erro')
        }else{
            this.classList.remove('erro')
        }
    })
}

function validacaoDeCep(valor){
    valor.addEventListener('blur', function(){
        const condicao = /^([0-9]{5})[-]([0-9]{3})$/
        if(this.value !== '' && this.value.match(condicao)){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
        }
    })
}

function validacaoDeEmail(valor){
    valor.addEventListener('blur', function(){
        //nome@gamil.com
        const condicao = /^[a-z0-9]+@[a-z]+.[a-z]?/i
        if(this.value !== '' && this.value.match(condicao)){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
        }
    })
}