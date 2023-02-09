function contagemRegressiva(numero){
    console.log(numero)

    let proximoNumero = numero - 1

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero)
}

contagemRegressiva(10)