//function Pokemon(nomeDoPokemon, tipoDoPokemon){
//    this.nome = this.nomeDoPokemon
//    this.tipo = this.tipoDoPokemon
//}

//const pikachu = new Pokemon('Pikachu', 'elétrico')

class Pokemon {
    //nome = ''
    //tipo = ''

    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon
        this.tipo = tipoDoPokemon
    }

    atacou(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }
}

class Pikachu extends Pokemon {

}

const pikachuDoAsh = new Pokemon('pikachu', 'elétrico')
const pikachu = new Pokemon('pikachu', 'elétrico')
pikachu.atacou('choque do trovão')
//pikachu.nome = 'pikachu'
//pikachu.tipo = 'elétrico'

console.log(pikachu)
console.log(pikachuDoAsh)