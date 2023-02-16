class Pesssoa {
    nome: string
    renda?: number

    constructor(nome: string, renda?: number){
        this.nome = nome
        this.renda = renda
    }

    dizOla(){
        return `${this.nome} diz olá!`
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

class ContaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor ** 10
    }
}

const contaDoCharles = new ContaFisica(1234567)
ContaBancaria.numeroDoBanco()