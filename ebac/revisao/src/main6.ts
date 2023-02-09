class Conta {
    numeroDaConta: number
    saldo: number = 0

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta
    }
}

class ContaSalario extends Conta {
    depositar(valor: number){
        this.saldo += valor
    }
}

interface ITransferencia {
    transferir: (valor: number, destino: Conta) => boolean
    taxaDeTransferencia: number
}

interface ICnpj {
    cnpj: number
}

interface ICpf extends ICnpj {
    cpf: number
}

class ContaCorrent extends Conta implements ITransferencia {
    taxaDeTransferencia: number = 0

    transferir(valor: number, destino: Conta){
        destino.saldo += (valor - this.taxaDeTransferencia)

        return true
    }
}