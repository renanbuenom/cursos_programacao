import {Cliente} from "./Cliente.js" //caminho relativo. Em alguns casos é bom utilizar o caminho completo do arquivo.
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Renan";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Gra";
cliente2.cpf = 88822233309;

const contaCorrenteRenan = new ContaCorrente();
/*contaCorrenteRenan.saldo = 0; -- linha retirada do código. Precisamos proteger o saldo para que não haja interferência direta nela,
sem que passe pelos padrões de comportamento que criamos dentro da classe. */
contaCorrenteRenan.agencia = 1001;
contaCorrenteRenan.cliente = cliente1;
contaCorrenteRenan.depositar(500);

const contaCorrenteGra = new ContaCorrente();
contaCorrenteGra.cliente = cliente2;
contaCorrenteGra.agencia = 102;

contaCorrenteRenan.transferir(200, contaCorrenteGra);

console.log(contaCorrenteGra);
console.log(contaCorrenteRenan);

/* demonstativo de valor sacado
const valorSacado = contaCorrenteRenan.sacar(50);
console.log("O valor sacado é: " + valorSacado); */

