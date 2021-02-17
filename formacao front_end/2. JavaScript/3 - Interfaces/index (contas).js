import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js"
//Boa prática: importar somente o que vai ser usado

const cliente1 = new Cliente("Renan", 11122233304);

const contaCorrenteRenan = new ContaCorrente(cliente1, 1001);
const contaPoupancaRenan = new ContaPoupanca(50, cliente1, 1001);
const contaSalarioRenan = new ContaSalario(cliente1);
contaCorrenteRenan.depositar(500);
contaCorrenteRenan.sacar(100);
contaPoupancaRenan.sacar(10);
contaSalarioRenan.sacar(200);

console.log(contaCorrenteRenan);
console.log(contaPoupancaRenan);


contaCorrenteRenan.transferir(100, contaPoupancaRenan);


/*Retiramos a definição new "Conta" e retornamos "ContaPoupança" ou "ContaCorrente", pois tem regras de diferentes. 
const contaCorrenteRenan = new Conta(0, 1001, cliente1);
Utilizamos, por fim, o EXTENDER nas classes:
export class ContaCorrente extends Conta{...} */

console.log(contaCorrenteRenan);
console.log(contaPoupancaRenan);
//console.log(contaSalarioRenan);
