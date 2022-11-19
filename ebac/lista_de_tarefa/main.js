$(document).ready(function(){

    $('form').on('submit', function(evento){
        evento.preventDefault()

        const tarefasLista = $('#tarefas-lista').val()
        const addTarefa =
        $('<li></li>')
        $(`<span>${tarefasLista}</span>`).appendTo(addTarefa)
    
        $(addTarefa).appendTo('ul')
        $(addTarefa).click(function(){
            $(addTarefa).css('text-decoration', 'line-through')
        })
        $('#tarefas-lista').val('')
    })
})