$(document).ready(function(){
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const botao = $(this)
        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

        //window.fetch()
        fetch(endpoint)
        .then(function(resposta){
            //console.log(resposta)
            return resposta.json()
        })
        .then(function(json){
            console.log(json)
            const logradouro = json.logradouro
            const bairro = json.bairro
            const cidade = json.localidade
            const estado = json.uf
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`

            $('#endereco').val(endereco)

            setInterval(function(){
                $(botao).find('i').removeClass('d-none')
                $(botao).find('span').addClass('d-none')
            }, 4000)
        })
    })
})