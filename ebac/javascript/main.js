const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let validForm = false

form.addEventListener('submit', function(evento){
    evento.preventDefault()

    const numeroConta = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `${nomeBeneficiario.value} ${numeroConta.value} ${valorDeposito.value}`

    validForm = nomeValid(nomeBeneficiario.value)
    if(validForm){
        document.querySelector('.success-message').style.display = 'block'
        document.querySelector('.success-message').innerHTML = mensagemSucesso
    }else{
        document.querySelector('.error-message').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup', function(){
    validForm = nomeValid(nomeBeneficiario.value)
    if(!validForm){
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    }else{
        document.querySelector('.error-message').style.display = 'none'
        nomeBeneficiario.classList.remove('error')
    }
})

function nomeValid(nomeCompleto){
    const nomeSplit = nomeCompleto.split(' ')

    return nomeSplit.length >= 2
}