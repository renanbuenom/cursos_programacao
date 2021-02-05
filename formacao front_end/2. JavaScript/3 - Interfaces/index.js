import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"

const cliente1 = new Cliente("Renan", 11122233304);

const contaCorrenteRenan = new ContaCorrente(1001, cliente1);
contaCorrenteRenan.depositar(500);
contaCorrenteRenan.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001); //cliente1 é uma variável de referência

console.log(contaPoupanca); 
console.log(contaCorrenteRenan);
