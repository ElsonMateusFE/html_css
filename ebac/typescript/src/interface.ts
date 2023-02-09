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

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean
    taxaTransferencia: number

    //transferir(valor, destinatario){
    //    destinatario.saldo += valor
    //}
}

interface IExemplo2 {
    cnpj: number
}
interface IExemplo3 extends IExemplo2 {
    telefone: number
}

//class ContaCorrent extends Conta implements ITransacional, IExemplo3 {
class ContaCorrent extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta){
        destinatario.saldo += (valor - this.taxaTransferencia)
        return true
    }

    taxaTransferencia: number = 0  
}

//const contaDaMaria: ITransacional = {
//
//}