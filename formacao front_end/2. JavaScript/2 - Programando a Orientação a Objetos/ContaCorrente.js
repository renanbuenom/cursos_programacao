export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0; /*adicionado a # no código para que ele seja *privado*. Ou seja, só pode ser alterado por operações da classe
    definir inicialmente como 0, para que ele tenha um valor inicial */

    sacar (valor) {  //*comportamento* de saque. encapsulado dentro da classe
        if (this._saldo >= valor) { //this = variável que estamos trabalhando no momento, de maneira gerérica.
            this._saldo -= valor;
            return valor; //somente retornando é que uma função utilizando o "sacar" vai ter um conteúdo "disponível". Caso contrário, seria "undefined".
        }       
    }

    depositar (valor) { //"{" abre o escopo do . "valor" é *parâmetro* (ou argumento) e "depositar" é *método (ou função)*
        if (valor <= 0) { //cláusulas de proteção. 
             return; /*Early return>: encerrando a operação para que se a clásula for verdadeira, não continua.
             Dessa forma o código fica mais legível. Caso ele ficasse muito longo, com ifs dentro de ifs, a operação final ficaria muito longe, a direita. */
        }

        this._saldo += valor;
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}