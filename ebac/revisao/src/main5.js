"use strict";
class Pesssoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} diz olá!`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
    static numeroDoBanco() {
        return 123;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor ** 10;
    }
}
const contaDoCharles = new ContaFisica(1234567);
ContaBancaria.numeroDoBanco();
