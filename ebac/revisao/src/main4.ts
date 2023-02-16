class Conta {
    numeroDaConta: number
    saldo: number = 0

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta
    }
}

class Depositar extends Conta {
    depositar(valor: number){
        this.saldo += valor
    }
}

interface ITransferencia {
    transferir: (valorDaTransferencia: number, contaDeDestino: Conta) => boolean

    taxaDeTransferencia: number
}

class ContaCorrente extends Conta implements ITransferencia {
    taxaDeTransferencia: number = 0
    
    transferir(valorDaTransferencia: number, contaDeDestino: Conta){
        contaDeDestino.saldo += (valorDaTransferencia - this.taxaDeTransferencia)

        return true
    }
}