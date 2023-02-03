let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 27

let altura: number = 1.75

const nascionalidade: string = 'brasileira'

const colegas: string[] = ['Charles', 'Sarah']
const tecnologia: Array<string> = ['html', 'css', 'js']
//Array para leitura (não conseguimos adicionar novos elementos)
const notas: ReadonlyArray<number> = [7, 8, 5, 8]

//Opção 01
//const lista: [string, boolean, number] = ['Charles', true, 27]

//Opção 02
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Charles', true, 27]

let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

let dadosDaApi: any
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1, 2, 3]
dadosDaApi = 'string'