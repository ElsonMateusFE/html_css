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
    Funcionario.call(this, nome, 'Estagiario', 2000)

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.05
        this.setSalario(novoSalario)
    }
}

const elson = new Funcionario('Elson', 'Front-end', 5000)
const mateus = new Estagiario('Mateus')

console.log(elson.getSalario())

console.log(mateus.getSalario())

//elson.setSalario(7000)
mateus.aumento()

elson.aumento()

console.log(elson.getSalario())

console.log(mateus.getSalario())