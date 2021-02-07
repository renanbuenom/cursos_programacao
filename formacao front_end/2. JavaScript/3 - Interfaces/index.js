import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"
//Boa prática: importar somente o que vai ser usado

const cliente1 = new Cliente("Renan", 11122233304);

const contaCorrenteRenan = new ContaCorrente(cliente1, 1001);
contaCorrenteRenan.depositar(500);
contaCorrenteRenan.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

contaCorrenteRenan.transferir(100, contaPoupanca);

/*Retiramos a definição new "Conta" e retornamos "ContaPoupança" ou "ContaCorrente", pois tem regras de diferentes. 
const contaCorrenteRenan = new Conta(0, 1001, cliente1);
Utiliazamos, por fim, o EXTENDER:
export class ContaCorrente extends Conta{...} */

console.log(contaCorrenteRenan);
console.log(contaPoupanca);
