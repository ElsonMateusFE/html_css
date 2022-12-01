document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('submit', function(evento){
        evento.preventDefault()

        let numeroMaximo = document.getElementById('numero-maximo')
        numeroMaximo = parseInt(numeroMaximo.value)

        let numeroAleatorio = Math.random() * numeroMaximo
        numeroAleatorio = Math.floor(numeroAleatorio + 1)
        
        document.querySelector('.resposta').innerText = numeroAleatorio
    })
})