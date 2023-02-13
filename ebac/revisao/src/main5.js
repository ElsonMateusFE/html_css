"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
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
class ContaCorrente extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor ** 2;
    }
}
const dadosCharles = new ContaCorrente(123);
ContaBancaria.numeroDoBanco();
