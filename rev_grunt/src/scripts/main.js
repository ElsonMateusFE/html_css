document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('submit', function(evento){
        evento.preventDefault()

        let numeroMaximo = document.getElementById('numero-maximo')
        numeroMaximo = parseInt(numeroMaximo.value)

        let numeroAleatorio = Math.random() * numeroMaximo
        numeroAleatorio = Math.floor(numeroAleatorio + 1)

        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'
    })
})