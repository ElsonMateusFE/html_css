function soma(a: number, b: number): number{
    return a + b
}

function somaValores(...valor: Array<number>): void{
    console.log(valor)
}

function teste(valor: number): string | boolean {
    if(valor > 10){
        return 'Maior que 10'
    }else{
        return false
    }
}