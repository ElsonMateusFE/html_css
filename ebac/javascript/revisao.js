const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let validaForm = false

form.addEventListener('submit', function(evento){
    evento.preventDefault()

    const numeroConta = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `${nomeBeneficiario.value} da conta ${numeroConta.value} tem R$ ${valorDeposito.value}`

    validaForm = validaNome(nomeBeneficiario.value)
    if(validaForm){
        //alert(mensagemSucesso)
        document.querySelector('.success-message').style.display = 'block'
        document.querySelector('.success-message').innerText = mensagemSucesso
    }else{
        //alert('Nome incompleto')
        nomeBeneficiario.style.border = '2px solid red'
        document.querySelector('.error-message').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup', function(){
    //console.log(evento)
    validaForm = validaNome(nomeBeneficiario.value)
    if(!validaForm){
        //alert('Nome incompleto')
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    }else{
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
})

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ')

    return nomeArray.length >= 2
}