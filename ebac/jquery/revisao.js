$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(evento){
        evento.preventDefault()

        const inputImagem = $('#endereco-imagem-nova').val()
        const addNovaImagem =
        $('<li style="display: none"></li>')
        $(`<img src="${inputImagem}" alt="Pintura de um gato">`).appendTo(addNovaImagem)
        $(`<div class="overlay-imagem-link">
        <a href="${inputImagem}" title="Ver imagem em tamanho real" target="_blank">
            Ver imagem em tamanho real
        </a>
        </div>`).appendTo(addNovaImagem)

        $(addNovaImagem).appendTo('ul')
        $(addNovaImagem).fadeIn(3000)
        $(addNovaImagem).click(function(){
            $(addNovaImagem).css('text-decoration', 'line-through')
        })
        $('#endereco-imagem-nova').val('')
    })
})