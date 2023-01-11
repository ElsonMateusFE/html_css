//Herança
function Pessoa(nome){
    this.nome = nome
    this.dizOi = function(){
        console.log(this.nome + " diz oi")
    }
    //this.dizCargo = function(){
    //    console.log(this.cargo)
    //}
}

function Funcionario(nome, cargo, salario){
    //this.nome = nome
    this.cargo = cargo
    this.salario = salario
    //this.dizOi = function(_ )

    this.dizCargo = function(){
        console.log(this.cargo)
    }

    Pessoa.call(this, nome)
}

//const pessoa1 = new Pessoa('Maria')
const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000)
const pessoa = new Pessoa('Elson')
//pessoa1.dizOi()
funcionario1.dizOi()
funcionario1.dizCargo()
//pessoa.dizCargo() //undefined

//console.log(pessoa1)
//console.log(funcionario1)