function validaNome(valor){
    valor.addEventListener('blur', function(){
        if(this.value === ''){
            this.classList.add('erro')
        }else{
            this.classList.remove('erro')
        }
    })
}

const campoNomes = document.querySelectorAll('input.nome')

for(let campo of campoNomes){
    validaNome(campo)
}