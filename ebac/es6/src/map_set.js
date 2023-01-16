let meuMap = new Map()
meuMap.set('nome', 'mateus')
meuMap.set('stack', 'html, css, js')

console.log(meuMap)

const nome = meuMap.get('nome')

console.log(nome)

console.log(meuMap.size)

// retorna true ou false para chave do Map
console.log(meuMap.has('sobrenome'))

//meuMap.clear()

console.log(meuMap.size)

for(let chave of meuMap.keys()){
    console.log(chave)
}

for(let valor of meuMap.values()){
    console.log(valor)
}

for(let entrada of meuMap.entries()){
    console.log(entrada)
}

for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`)
}

meuMap.delete('stack')

console.log(meuMap)

const nomes = new Set()

nomes.add('Charles').add('Sarah').add('Nathan')
console.log(nomes)

console.log(nomes.keys())
console.log(nomes.values())

nomes.forEach(valor => {
    console.log(valor)
})

const array = ['Charles', 'Charles', 'Sarah', 'Sarah', 'Nathan', 'Nathan']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)