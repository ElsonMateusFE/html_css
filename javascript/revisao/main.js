function validaCampo(evento){
    evento.addEventListener('blur', function(){
        if(this.value === ''){
            this.classList.add('erro')
        }else{
            this.classList.remove('erro')
        }
    })
}

function validaCampoCep(evento){
    evento.addEventListener('blur', function(){
        const condicao = /^[0-9]{5}-[0-9]{3}$/
        if(this.value === '' && this.match(condicao)){
            this.classList.add('erro')
        }else{
            this.classList.remove('erro')
        }
    })
}

const campoNome = document.querySelectorAll('input.nome')

for(let campo of campoNome){
    validaCampo(campo)
}

const campoCep = document.querySelectorAll('input.cep')

for(let campo of campoCep){
    validaCampoCep(campo)
}