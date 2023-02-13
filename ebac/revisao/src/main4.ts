class Conta {
    nome: string
    saldo: number = 0

    constructor(nome: string){
        this.nome = nome
    }
}

class Depositar extends Conta {
    depositar(valor: number){
        this.saldo += valor
    }
}

interface ITransferencia {
    transferencia: (valorDaTransferencia: number, contaDeDestino: Conta) => boolean
    taxaDeTransferencia: number
}

interface ICpf  extends ITransferencia {
    cpf: number
}

class contaCorrente extends Conta implements ITransferencia {
    taxaDeTransferencia: number = 0

    transferencia(valorDaTransferencia: number, contaDeDestino: Conta){
        contaDeDestino.saldo += (valorDaTransferencia - this.taxaDeTransferencia)

        return true
    }
}