export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor) { //set = acessor de atribuição
        if(novoValor instanceof Cliente){ //só aceita alteração dentro de _cliente, se a "instância" for do tipo "Cliente"
            //proteção para que seja atribuindo somente algo que esperamos.
            this._cliente = novoValor;
        }
    }

    get cliente() { //get = acessor de pegar valor
        return this._cliente;
    }

    _saldo = 0; /*adicionado a # no código para que ele seja *privado*. Ou seja, só pode ser alterado por operações da classe
    definir inicialmente como 0, para que ele tenha um valor inicial */

    get saldo() { //atribui ao saldo somente a propriedade de leitura, ou seja, "pegar" o valor, mas não atribuir um novo valor.
        return this._saldo;
    }

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

    transferir (valor, conta) { //pedaço de código com "nível de abstração mais alto": utiliza vocabulário de negócio, não de programação.
        conta.cidade = "São Paulo"; //adicionando dinamicamente uma variável "cidade", sem precisar declarar ela anteriormente.
        const valorSacado = this.sacar(valor); //this = chama o método para minha própria classe.
    }

}