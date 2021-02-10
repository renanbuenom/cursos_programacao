import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js"
//Boa prática: importar somente o que vai ser usado

const cliente1 = new Cliente("Renan", 11122233304);

const contaCorrenteRenan = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaCorrenteRenan.depositar(500);
contaCorrenteRenan.sacar(100);
contaPoupanca.sacar(10);
contaSalario.sacar(200);


/*Retiramos a definição new "Conta" e retornamos "ContaPoupança" ou "ContaCorrente", pois tem regras de diferentes. 
const contaCorrenteRenan = new Conta(0, 1001, cliente1);
Utilizamos, por fim, o EXTENDER nas classes:
export class ContaCorrente extends Conta{...} */

console.log(contaCorrenteRenan);
console.log(contaPoupanca);
console.log(contaSalario);
