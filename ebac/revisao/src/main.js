class Pessoa {
    constructor(nome, cargo){
        this.nome = nome
        this.cargo = cargo
    }
}

class Funcionario extends Pessoa {
    #salario = 5000

    constructor(){
        super('Funcionario01', 'Frontend')
    }

    pagaImposto(){
        this.#salario -= 200
    }

    exibirImpostoSemImposto(){
        console.log(this.#salario)
    }
}

const funcionario = new Funcionario()
console.log(funcionario)
funcionario.pagaImposto()
funcionario.exibirImpostoSemImposto()