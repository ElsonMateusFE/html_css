const nomeBeneficiario = document.getElementById('nome-beneficiario')
const form = document.getElementById('form-deposito')
let verificaForm = false

form.addEventListener('submit', function(e){
    e.preventDefault()

    const numeroConta = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const aviso = `${numeroConta.value} - ${valorDeposito.value} - ${nomeBeneficiario.value}`

    verificaForm = verificaNome(nomeBeneficiario.value)
    if(verificaForm){
        document.querySelector('.success-message').style.display = 'block'
        document.querySelector('.success-message').innerHTML = aviso
    }else{
        document.querySelector('.error-message').style.display = 'block'
    }    
})

nomeBeneficiario.addEventListener('keyup', function(){
    verificaForm = verificaNome(nomeBeneficiario.value)
    if(!verificaForm){
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'
    }else{
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
})

function verificaNome(nomeCompleto){
    const nome = nomeCompleto.split(' ')

    return nome.length >= 2
}