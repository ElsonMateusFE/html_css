const menu = document.querySelectorAll('.btn-menu')
for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', function(event){
        //event.target.parentNode.classList.toggle('is-open')
        if(event.target.parentNode.classList.contains('is-open')){
            event.target.parentNode.classList.remove('is-open')
        }else{
            event.target.parentNode.classList.add('is-open')
        }
    })
}

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('submit', function(event){
        event.preventDefault()

        let numeroMaximo = document.getElementById('number')
        numeroMaximo = Number.parseInt(numeroMaximo.value)

        let numeroAleatorio = Math.random() * numeroMaximo
        numeroAleatorio = Math.floor(numeroAleatorio + 1)
        
        const span = document.querySelector('.res')
        span.innerHTML = numeroAleatorio
    })
})