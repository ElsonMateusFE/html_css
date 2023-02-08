 class Pessoa {
    nome: string
    renda?: number

    constructor(nome: string,  renda?: number){
        this.nome = nome
        this.renda = renda
    }

    dizOla(): string {
        return `${this.nome} disse oi`
    }
 }

 class ContaBancaria {
    //private saldo: number = 0
    protected saldo: number = 0
    public numeroConta: number

    constructor(numeroConta: number){
        this.numeroConta = numeroConta
    }

    static retornaNumeroDoBanco(){
        return 125
    }

    private getSaldo(){
        return this.saldo
    }

    depositar(valor: number){
        this.saldo += valor
    }
    //setSaldo(valor: number){
    //    this.saldo = valor
    //}
 }

class ContaBancariaPessoaFisica extends ContaBancaria {
    // Polimofismo
    depositar(valor: number): void {
        this.saldo = valor * 2
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(1234567)
//contaDoPedro.

// Não é nercessario criar uma instancia, o static pertece a class
ContaBancaria.retornaNumeroDoBanco()