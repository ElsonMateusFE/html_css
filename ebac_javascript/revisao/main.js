const campoNome = document.querySelectorAll('input.nome')
const campoEmail = document.querySelectorAll('input.email')

for(let campo of campoNome){
    validaCampo(campo)
}

for(let campo of campoEmail){
    validaCampoEmail(campo)
}

function validaCampo(valor){
    valor.addEventListener('blur', function(e){
        e.preventDefault()
    
        if(this.value === ''){
            this.classList.add('erro')
        }else{
            this.classList.remove('erro')
        }
    })
}

function validaCampoEmail(valor){
    valor.addEventListener('blur', function(e){
        e.preventDefault()
    
        // ([a-z]+)? >> opcional

        const condicao = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        if(this.value !== '' && this.value.match(condicao)){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
        }
    })
}