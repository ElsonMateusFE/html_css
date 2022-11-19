$(document).ready(function(){
    $('#cpf').mask('000.000.000.00',{
        placeholder: 'XXX.XXX.XXX-XX'
    })

    $('#cep').mask('00000-000',{
        placeholder: 'XXXXX-XXX'
    })

    $('#telefone').mask('(00)00000-0000',{
        placeholder: '(XX)XXXXX-XXXX'
    })
})