class Pessoa {
    nome: string
    renda?: number

    constructor(nome: string, renda?: number){
        this.nome = nome
        this.renda = renda
    }
}

class ContaBancaria {
    protected saldo: number = 0
    public numeroDaConta: number

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta
    }

    static numeroDoBanco(){
        return 123
    }

    private getSaldo(){
        return this.saldo
    }

    depositar(valor: number){
        this.saldo += valor
    }
}

class ContaCorrente extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor ** 2
    }
}

const dadosCharles = new ContaCorrente(123)
ContaBancaria.numeroDoBanco()