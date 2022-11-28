document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('submit', function(evento){
        evento.preventDefault()

        let sorteadorDeNumero = document.getElementById('sorteador')
        sorteadorDeNumero = parseInt(sorteadorDeNumero.value)

        let numeroAleatorio = Math.random() * sorteadorDeNumero
        numeroAleatorio = Math.floor(numeroAleatorio + 1)
        
        document.getElementById('numero-sorteado').innerText = numeroAleatorio
    })
})