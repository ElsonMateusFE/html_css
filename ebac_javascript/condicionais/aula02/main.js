//for
var km
const revisao = 3

for(km = 0; km <= revisao; km++){
    //console.log(`Apenas ${km} kms então pode rodar`)
}

const alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]
]

let nota = 0
for(let i = 0; i < alunos.length; i++){

    nota = 0
    notasAluno = alunos[i]
    console.log(`Aluno: ${i + 1}`)
    console.log(`Notas: ${notasAluno}`)

    for(c = 0; c < notasAluno.length; c++){
        nota += notasAluno[i]
    }

    media = nota / 4

    if(media >= 7){
        resultado = 'aprovado'
    }else{
        resultado = 'reprovado'
    }

    console.log(`Média: ${media} - ${resultado}`)
}

let hora = 24

// while
while(hora > 0){
    console.log(hora)
    hora--
}

console.log(`Total de horas: ${hora}`)

//do while
do {

} while (condicao){

}