"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class Depositar extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaDeTransferencia = 0;
    }
    transferir(valorDaTransferencia, contaDeDestino) {
        contaDeDestino.saldo += (valorDaTransferencia - this.taxaDeTransferencia);
        return true;
    }
}
