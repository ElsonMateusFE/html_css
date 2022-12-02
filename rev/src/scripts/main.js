document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('submit', function(evento){
        evento.preventDefault()

        let numeroMaximo = document.getElementById('numero-maximo')
        numeroMaximo = parseInt(numeroMaximo.value)

        let numeroAleatorio = Math.random() * numeroMaximo
        numeroAleatorio = Math.floor(numeroAleatorio + 1)
        
        document.querySelector('.resposta').style.display = 'block'
        document.getElementById('numero-sorteado').innerText = numeroAleatorio
        document.getElementById('numero-maximo').value = ''
    })
})

const menu = document.querySelectorAll('.menu-hanbuguer')
for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', function(evento){
        //evento.target.parentNode.classList.toggle('is-open')
        if(evento.target.parentNode.classList.contains('is-open')){
            evento.target.parentNode.classList.remove('is-open')
        }else{
            evento.target.parentNode.classList.add('is-open')
        }
    })
}