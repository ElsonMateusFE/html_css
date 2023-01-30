$(document).ready(function(){
    $('.owl-carousel').owlCarousel()

    let titulos = $('h4')

    let itens = $('.featured-item')

    let destaque = $('#featured')

    console.log(titulos.first())

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link')

    $('.featured-item:first h4').append('<span class="badge bg-secondary m-2">Novo</span>')

    //dblclick => quando o usuario click duas vezes
    $('.featured-item h4').dblclick(function(){
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100'
        })
    })

    $('.featured-item').hover(
        function(){
            console.log($(this).find('h4').text())
        },
        function(){
            console.log($(this).find('h4').text() + '-' + $(this.find('h6').text()))
        })

        //blur/click
    $('.featured-item a').on('click', function(e){

        e.preventDefault()
    
        alert('Produto esgotado ')
    
    })
})

//append & prepend
// $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
// $('.featured-item:first h4').start('<span class="badge bg-secondary m-2">Novo</span>')
// $('.featured-item').before('texto simples')
// $('.featured-item').after('texto simples')
// $('.featured-item:first h4').hide() //ocuta
// $('.featured-item:first h4').show() // exibi
// $('.featured-item:first h4').remove() // remove o elemento da página
// $('.featured-item:first h4').toggleClass('active')
// $('.featured-item:first h4').findIn(2000)
// $('.featured-item:first h4').findOut(2000)
// $('.featured-item:first h4').css('color', 'green')
// $('.featured-item:first h4').css({
//    'color': 'green',
//    'background': 'black',
//    'font-weight': '100'
//})

//$('.featured-item').mouseenter(function(){
//    console.log($(this).find('h4').text())
//})

//$('.featured-item').mouseleave(function(){
//    console.log($(this).find('h4').text())
//})

//$('.featured-item').hover(
//    function(){
//        console.log($(this).find('h4').text())
//    },
//    function(){
//        console.log($(this).find('h4').text() + '-' + $(this.find('h6').text()))
//    })