const form = document.getElementById('form-numerico')


form.addEventListener('submit', function(evento){
    evento.preventDefault()

    const valorA = document.getElementById('valora')
    const valorB = document.getElementById('valorb')
    const blocoPositivo = document.querySelector('.mensagem-positiva')
    const blocoNegativo = document.querySelector('.mensagem-negativa')
    blocoPositivo.style.display = 'block'
    blocoNegativo.style.display = 'block'

    if(valorA.value < valorB.value){
        blocoPositivo.style.display = 'none'

        valorA.value = ''
        valorB.value = ''

    }else{
        blocoNegativo.style.display = 'none'

        valorA.value = ''
        valorB.value = ''
    }
})