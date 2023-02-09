function somaDoisNumeros(a: number, b: number): number {
    return a + b
}

function soma(...valor: number[]): void{
    console.log(valor)
}

function teste(): boolean | string {
    if(10 > 0){
        return true
    }else{
        return 'String'
    }
}