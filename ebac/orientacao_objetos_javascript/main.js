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
    Funcionario.call(this, nome, 'Estagiário', 1200)

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.05
        this.setSalario(novoSalario)
    }
}

const elson = new Funcionario('Elson', 'Frontend', 5000)
const carlos = new Estagiario('Carlos')

elson.setSalario(8000)
carlos.setSalario(2000)

elson.aumento()
carlos.aumento()

console.log(elson.getSalario())
console.log(carlos.getSalario())