const funcaoPromise = new Promise((resolve, reject) => {
    try{
        let expressa = 0
    
        for(let i = 0; i < 1000000000; i++){
            expressa++
        }
    
        resolve(expressa)
    }catch(erro){
        reject('Erro no sistema')
    }
})

//console.log('Início')
//funcaoPromise.then(resultado => console.log(resultado))
    //.catch(erro => console.log(erro))
//console.log('Fim')

const promiseComParametro = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Usuário ${login} está logado`)
        }, 3000)
    })
}
 
async function execucaoPrincipal(){
    console.log('Início')

    promiseComParametro('elsonmateus@gmail.com', 1234567)
        .then(resultado => {
            console.log(resultado)
        })

    try{
        //Opção 1
        //await funcaoPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
        //Opção 2
        const resultado = await funcaoPromise
        console.log(resultado)
    }catch(erro){
        console.log(erro)
    }

    console.log('Fim')
}

execucaoPrincipal()