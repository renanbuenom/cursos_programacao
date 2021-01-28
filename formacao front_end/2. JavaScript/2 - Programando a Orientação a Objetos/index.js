class Cliente { 
    nome;
    cpf;  
} 

class ContaCorrente {
    agencia;
    #saldo = 0; /*adicionado a # no código para que ele seja *privado*. Ou seja, só pode ser alterado por operações da classe
    definir inicialmente como 0, para que ele tenha um valor inicial */

    sacar (valor) {  //*comportamento* de saque. encapsulado dentro da classe
        if (this.#saldo >= valor) { //this = variável que estamos trabalhando no momento, de maneira gerérica.
            this.#saldo -= valor;
        }       
    }

    depositar (valor) { //"{" abre o escopo do . "valor" é *parâmetro* (ou argumento) e "depositar" é *método (ou função)*
        if (valor > 0) {
            this.#saldo += valor;
        }
    }
}

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

contaCorrenteRenan.depositar(100);
contaCorrenteRenan.sacar(50);

console.log(contaCorrenteRenan);

