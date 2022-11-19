$(document).ready(function(){
    $('#carousel-imagem').slick({
        autoplay: true,
    })

    $('.menu-humburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            }
        },
        messages:{
            nome: 'Campo obrigadorio',
            telefone: 'Campo obrigadorio',
            email: 'Campo obrigadorio'
        },
        submitHandLer: function(form){
            console.log(form)
        },
        invalidHandLer: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})