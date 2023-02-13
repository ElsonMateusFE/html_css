"use strict";
class Conta {
    constructor(nome) {
        this.saldo = 0;
        this.nome = nome;
    }
}
class Depositar extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class contaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaDeTransferencia = 0;
    }
    transferencia(valorDaTransferencia, contaDeDestino) {
        contaDeDestino.saldo += (valorDaTransferencia - this.taxaDeTransferencia);
        return true;
    }
}
