function Pessoa(nome){
    this.nome = nome
}

function Funcionario(nome, cargo, salario){
    Pessoa.call(this, nome)
    this.cargo = cargo
    let _salario = salario

    this.getSalario = function(){
        return _salario
    }

    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor
        }
    }

    this.aumento = function(){
        const novoSalario = _salario * 1.1

        _salario = novoSalario
    }
}

function Estagiario(nome){
    Funcionario.call(this, nome, 'Estagiário', 2000)

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.05
        this.setSalario(novoSalario)
    }
}

const charles = new Funcionario('Charles', 'Frontend', 5000)
const nathan = new Estagiario('Nathan')

charles.setSalario(8000)
charles.aumento()
console.log(charles.getSalario())

nathan.aumento()
console.log(nathan.getSalario())