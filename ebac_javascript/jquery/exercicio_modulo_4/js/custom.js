// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

   $('.owl-carousel').owlCarousel();

   let titulos = $('h4') // tag
   
   let itens = $('.featured-item') // class
    
   let destaques = $('#featured') // id

   console.log(titulos.first());

   // Configuração de produtos

   $('.featured-item a').addClass('btn btn-dark stretch-link');

   $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')
     
   /*
   $('.featured-item h4').dblclick( function(){

      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });

   });
   */

   /*
   * Manipulação de eventos
   */
   /*
   $('.featured-item a').on('blur', function(event){

      event.preventDefault();

      alert('Produto esgotado');

   })
   */

   /* Callback */
   /*
   $('.featured-item:nth(1)').hide(2000, function(){
      // este é o callback
      alert(`${$(this).find('h4').text()} esgotado`)
   })
   */
   $('.featured-item:nth(1)')
      .hide(2000, function(){
      // este é o callback
      console.log(`${$(this).find('h4').text()} esgotado`)
   })
      .show(2000, function(){
         console.log(`${$(this).find('h4').text()} em estoque`)
      })

   /* Animação */
   const duracao = 1000

   $('.featured-item:nth(0)')
      .hide(duracao)
      .show(duracao)
      .fadeIn(duracao)
      .fadeOut(duracao)
      .toggle(duracao)
      .toggle(duracao)

   $('#form-submit').on('click', function(e){
      e.preventDefault()

      if($('#email').val() != ''){
         $('#email').animate({
            opacity: 'toggle',
            top: '-50'
         }, duracao, function(){
            console.log($(this).val())
         })
      }
   })

   /* Ouvinte de eventos .nav-modal-open
   $('.nav-modal-open').on('click', function(e){
      e.preventDefault()

      //attr > busca atributo
      let elem = $(this).attr('rel')

      $('.modal-body').html($(`#${elem}`).html())
      //$('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal('#modelId')

      myModal.show()
   })
   */
/*
   function validate(elem){
      if(elem.val() == ''){
         console.log(`o campo de ${elem.attr('name')} é obrigatório`)

         elem.addClass('invalid')

         // close, busca o elemnto mais proximo com id '.text-muted'
         elem.parent().find('.text-muted').show()

         return false
      }else{
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

  //blur > qunado o elemento perder o foco
  //focus > quando o elemento está em foco

   $('body').submit('modal-body .form', function(e){
      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)

      if(inputEmail.hasClass('invalid') && inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      }else{
         $(this).submit()
      }
  })


   $('body').on('blur', '#nome', function(){
      validate($(this))
   })

   $('body').on('blur', '#email', function(){
      validate($(this))
   })

   $('body').on('blur', '#date', function(){
      validate($(this))
      $('#date').mask('00/00/0000')
   })

   $('body').on('blur', '#time', function(){
      validate($(this))
      $('#time').mask('00:00:00')
   })

   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000')
   })

   $('body').on('blur', '#phone', function(){
      validate($(this))
      $('#phone').mask('00000-0000')
   })

   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $('#cpf').mask('000.000.000-00')
   })
*/
   $('.nav-modal-open').click(function(){

      const destino = $(this).attr('rel')

      $('.modal-title').html($(this).text())

      $('.modal-body').html($(`#${destino}`).html())

      const modalVisibility = new bootstrap.Modal('#modelId')

      modalVisibility.show()
   })

   function validate(valor){
      if(valor.val() === ''){
         console.log(`Campo obrigatório ${valor.attr('name')}`)
         valor.addClass('invalid')
      }else{
         valor.removeClass('invalid')
      }
   }

   $('body').submit('modal-body.form', function(e){
      e.preventDefault()

      const nome = $('#nome')
      const email = $('#email')
      const date = $('#date')

      validate(nome)
      validate(email)
      validate(date)

      const verificacao = nome.hasClass('invalid') && email.hasClass('invalid') && date.hasClass('invalid')
      if(verificacao){
         console.log('verificar campos obrigatórios')
         return false
      }else{
         $(this).submit()
      }
   })

   $('body').on('blur', '#nome', function(){
      validate($(this))
   })

   $('body').on('blur', '#email', function(){
      validate($(this))
   })

   $('body').on('blur', '#date', function(){
      validate($(this))
      $(this).mask('00/00/0000')
   })
})
