function validacaoDeCampo(valor){
    valor.addEventListener('blur', function(){

        if(this.value === ''){
            this.classList.add('erro')
        }else{
            this.classList.remove('erro')
        }
    })
}

function validacaoDeEmal(valor){
    valor.addEventListener('blur', function(){

        const condicao = /^[a-z0-9]+@[a-z0-9]+.[a-z]$/i
        if(this.value.match(condicao)){
            this.classList.remove('erro')
        }else{
            this.classList.add('erro')
        }
    })
}

const campoObrigatorio = document.querySelectorAll('input.obrigatoria')
const campoEmail = document.querySelectorAll('input.email')

for(let campo of campoObrigatorio){
    validacaoDeCampo(campo)
}

for(let campo of campoEmail){
    validacaoDeEmal(campo)
}