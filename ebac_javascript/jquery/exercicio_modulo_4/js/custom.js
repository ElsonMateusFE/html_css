$(document).ready(function(){

   $('.owl-carousel').owlCarousel();

   let titulos = $('h4') // tag

   //console.log(titulos.first());

   $('.featured-item a').addClass('btn btn-primary stretch-link w-100');

   $('.featured-item:first h4').append('<span class="badge bg-secondary m-1">Novo</span>')

   /*
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
     
   $('.featured-item h4').dblclick( function(){

      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });

   });

   //Callback
   $('.featured-item:nth(1)').hide(2000, function(){
      // este é o callback
      alert(`${$(this).find('h4').text()} esgotado`)
   })
   $('.featured-item:nth(1)')
   .hide(2000, function(){
      // este é o callback
      console.log(`${$(this).find('h4').text()} esgotado`)
   })
   .show(2000, function(){
      console.log(`${$(this).find('h4').text()} em estoque`)
   })
   */

   $('#subscribe').on('click', function(e){
      e.preventDefault()

      if($('#email').val() !== ''){
         $('#email').animate({
            opacity: 0,
            top: -50
         }, 2000, function(){
            console.log($(this).val())
         })
      }
   })

   $('.nav-modal-open').on('click', function(e){
      e.preventDefault()

      let elem = $(this).attr('rel')

      $('.modal-body').html($(`#${elem}`).html())
      
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal('#modelId')

      myModal.show()
   })

   function validate(elem){
      if(elem.val() == ''){
         console.log(`o campo de ${elem.attr('name')} é obrigatório`)

         elem.addClass('invalid')

         elem.parent().find('.text-muted').show()

         return false
      }else{
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

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

   $('body').on('focus', '#date', function(){
      validate($(this))
      $('#date').mask('00/00/0000')
   })

   $('body').on('focus', '#time', function(){
      validate($(this))
      $('#time').mask('00:00:00')
   })

   $('body').on('focus', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000')
   })

   $('body').on('focus', '#phone', function(){
      validate($(this))
      $('#phone').mask('00000-0000')
   })

   $('body').on('focus', '#cpf', function(){
      validate($(this))
      $('#cpf').mask('000.000.000-00')
   })

})
