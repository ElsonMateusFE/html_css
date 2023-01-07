function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function(){
        console.log('acelerar')
    }
}

const carroDaMaria = new Carro('Ka', 'Ford', 2021, 2020)

const nome = 'Mateus'
const idade = 25
const ehMaiorDeIdade = true
const conhecimento = ['html', 'css', 'javascript']

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimento: conhecimento,
}

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof ehMaiorDeIdade)
console.log(typeof conhecimento)
console.log(typeof pessoa)
console.log(typeof carroDaMaria)

//Instanceof
console.log(carroDaMaria instanceof Carro)
console.log(conhecimento instanceof Carro)