import { Cliente } from "./Cliente.js" 
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Renan", 11122233304);
const cliente2 = new Cliente("Gra", 88822233309);

const contaCorrenteRenan = new ContaCorrente(1001, cliente1);
contaCorrenteRenan.depositar(500);
contaCorrenteRenan.sacar(100);

const contaCorrenteGra = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRenan.transferir(valor, contaCorrenteGra);

console.log(contaCorrenteRenan);
console.log(contaCorrenteGra);
console.log("O número de contas total é: " + ContaCorrente.numeroDeContas);