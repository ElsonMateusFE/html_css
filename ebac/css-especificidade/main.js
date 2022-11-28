const accordion = document.querySelectorAll('.accordion')
        for(let i = 0; i < accordion.length; i++){
            accordion[i].addEventListener('click', function(evento){
                evento.target.parentNode.classList.toggle('is-open')
                //if(evento.target.parentNode.classList.contains('is-open')){
                //    evento.target.parentNode.classList.remove('is-open')
                //}else{
                //    evento.target.parentNode.classList.add('is-open')
                //}
            })
        }