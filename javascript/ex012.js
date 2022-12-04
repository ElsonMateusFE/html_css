/*
let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas`)
if(hora < 12){
    console.log('Boom Dia!')
}else if (hora <= 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}
*/

let agora = new Date()
let diaSem = agora.getDay()

//console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] dia inválido!')
        break
}