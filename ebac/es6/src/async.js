function funcaoMuitoPesada(){
    let execucoes = 0

    for(let i = 0; i < 1000000000; i++){
        execucoes++
    }

    return execucoes
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try{
        let execucoes = 0

        for(let i = 0; i < 1000000000; i++){
            execucoes++
        }
        resolve(execucoes)
    }catch(error){
        //reject(error)
        reject('Deu erro na iteração dos números')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

//console.log('inicio')
//console.log(funcaoMuitoPesada())
//funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
//console.log('fim')

async function execucaoPrincipal(){
    console.log('inicio')

    //await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('elson@gamil.com', 1234567).then(resultado => {
        console.log(resultado)
    })

    try{
        const resultado = await funcaoMuitoPesadaPromise
        console.log(resultado)
    }catch(e){
        console.log(e)
    }

    console.log('fim')
}

execucaoPrincipal()