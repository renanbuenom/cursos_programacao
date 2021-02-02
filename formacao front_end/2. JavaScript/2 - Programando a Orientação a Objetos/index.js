import { Cliente } from "./Cliente.js" //caminho relativo. Em alguns casos é bom utilizar o caminho completo do arquivo.
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Renan", 11122233304);
/* Retirado do código, utilizado agora dentro do constructor Cliete(...)
cliente1.nome = "Renan";
cliente1.cpf = 11122233309; */

const cliente2 = new Cliente("Gra", 88822233309);

const contaCorrenteRenan = new ContaCorrente(cliente1, 1001);
/*contaCorrenteRenan.saldo = 0; -- linha retirada do código. Precisamos proteger o saldo para que não haja interferência direta nela,
sem que passe pelos padrões de comportamento que criamos dentro da classe. */

/*Linhas retiradas, utilizando agora o construtor new ContaCorrente(...) acima
contaCorrenteRenan.agencia = 1001;
contaCorrenteRenan.cliente = cliente1; */
contaCorrenteRenan.depositar(500);

const contaCorrenteGra = new ContaCorrente(cliente2, 102);

/* Alterativa (não indicada) de definição de elementos: (ao invez de definir nas linhas 8-10)
contaCorrenteGra.cliente = new Cliente ();
contaCorrenteGra.cliente.nome = "Gra";
contaCorrente.cliente.cpf = 88822233309;*/

let valor = 200;
contaCorrenteRenan.transferir(valor, contaCorrenteGra);

/* demonstativo de valor sacado
const valorSacado = contaCorrenteRenan.sacar(50);
console.log("O valor sacado é: " + valorSacado); */