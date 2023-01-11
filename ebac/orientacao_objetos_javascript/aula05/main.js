//Encapsulamento
function Pessoa(nome){
    this.nome = nome
    this.dizOi = function(){
        console.log(this.nome + " diz oi")
    }
}

function Funcionario(nome, cargo, salario){
    this.cargo = cargo
    //this.salario = salario
    let _salario = salario

    //Getters e Setters
    this.getSalario = function(){
        return `O salário de ${this.nome} é de ${_salario}`
    }

    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor
        }
    }

    this.dizCargo = function(){
        console.log(this.cargo)
    }

    Pessoa.call(this, nome)
}

const funcionario1 = new Funcionario('Maria', 'dev front-end', 5000)

const pessoa = new Pessoa('Elson')

funcionario1.dizOi()
funcionario1.dizCargo()

//funcionario1.atribuiSalario(7000)

funcionario1.setSalario('mil')

console.log(funcionario1.getSalario())