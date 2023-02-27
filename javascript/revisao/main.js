document.getElementById('formulario-01').addEventListener('submit', function(e){
    e.preventDefault()

    let dados = new FormData(this)

    const notas = []

    for(let nota of dados.values()){
        const condicao = nota.match(/[0-9]/) ? Number(nota) : 0

        if(!isNaN(condicao)){
            notas.push(condicao)
        }
    }

    console.log(notas)
})