const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let validaForm = false

form.addEventListener('submit', function(event){
    event.preventDefault()

    const numeroConta = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `${nomeBeneficiario.value}, ${numeroConta.value}, ${valorDeposito.value}`

    validaForm = validaNome(nomeBeneficiario.value)
    if(validaForm){
        document.querySelector('.success-message').style.display = 'block'
        document.querySelector('.success-message').innerHTML = mensagemSucesso
    }else{
        document.querySelector('.error-message').style.display = 'block'
        nomeBeneficiario.style.border = '2px solid red'
    }
})

nomeBeneficiario.addEventListener('keyup', function(){
    validaForm = validaNome(nomeBeneficiario.value)
    if(!validaForm){
        document.querySelector('.error-message').style.display = 'block'
        nomeBeneficiario.classList.add('error')
    }else{
        document.querySelector('.error-message').style.display = 'none'
        nomeBeneficiario.classList.remove('error')
    }
})

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ')

    return nomeArray.length >= 2
}