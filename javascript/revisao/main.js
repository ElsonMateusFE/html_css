function validateNome(valor){
    valor.addEventListener('blur', function(){
        if(this.value === ''){
            this.classList.add('erro')
        }else{
            this.classList.remove('erro')
        }
    })
}

function nomeCompleto(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ')

    return nomeArray.length >= 2
}

const campoNome = document.querySelectorAll('input.nome')

for(let campo of campoNome){
    nomeCompleto(campo)
}