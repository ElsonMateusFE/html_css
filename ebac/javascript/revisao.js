const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let validForm = false

form.addEventListener('submit', function(evento){
    evento.preventDefault()

    const numeroConta = document.getElementById('numero-conta')
    const valorConta = document.getElementById('valor-deposito')
    const mensagemSucesso = `${nomeBeneficiario.value}, ${numeroConta.value}, ${valorConta.value}`

    validForm = validNome(nomeBeneficiario.value)
    if(validForm){
        const blockSucesso = document.querySelector('.success-message')
        blockSucesso.style.display = 'block'
        blockSucesso.innerHTML = mensagemSucesso
    }else{
        document.querySelector('.error-message').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup', function(evento){
    validForm = validNome(nomeBeneficiario.value)
    if(!validForm){
        document.querySelector('.error-message').style.display = 'block'
        nomeBeneficiario.classList.add('error')
    }else{
        document.querySelector('.error-message').style.display = 'none'
        nomeBeneficiario.classList.remove('error')
    }
})

function validNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ')

    return nomeArray.length >= 2
}