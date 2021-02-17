import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //Atributos
    static numeroDeContas = 0; /*dessa forma permite que esse atributo seja alterado para todas as classes e 
    não seja exclusivo de cada uma*/;
    agencia;

    //Atributos privados
    _cliente;
    _saldo = 0; /*adicionado a # no código para que ele seja *privado*. Ou seja, só pode ser alterado por operações da classe
    definir inicialmente como 0, para que ele tenha um valor inicial*/

    //Acessores
    set cliente(novoValor) { //set = acessor de atribuição
        if (novoValor instanceof Cliente) { //só aceita alteração dentro de _cliente, se a "instância" for do tipo "Cliente"
            //proteção para que seja atribuindo somente algo que esperamos.
            this._cliente = novoValor;
        }
    }

    get cliente() { //get = acessor de pegar valor
        return this._cliente;
    }

    get saldo() { //atribui ao saldo somente a propriedade de leitura, ou seja, "pegar" o valor, mas não atribui um novo valor.
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; //sempre que construir uma nova conta, adiciona o número de contas sequencialmente;
            //deve ser "ContaCorrente", caso contrário alteraria apenas da classe específica (this).
    }


    //Comportamentos
    sacar(valor) {  //*comportamento* de saque. encapsulado dentro da classe
        if (this._saldo >= valor) { //this = variável que estamos trabalhando no momento, de maneira gerérica.
            this._saldo -= valor;
            return valor; //somente retornando é que uma função utilizando o "sacar" vai ter um conteúdo "disponível". Caso contrário, seria "undefined".
        }
    }

    depositar(valor) { //"{" abre o escopo do . "valor" é *parâmetro* (ou argumento) e "depositar" é *método (ou função)*
        if (valor <= 0) { //cláusulas de proteção. 
            return; /*Early return>: encerrando a operação para que se a clásula for verdadeira, não continua.
             Dessa forma o código fica mais legível. Caso ele ficasse muito longo, com ifs dentro de ifs, a operação final ficaria muito longe, a direita. */
        }

        this._saldo += valor;
    }

    transferir(valor, conta) { //pedaço de código com "nível de abstração mais alto": utiliza vocabulário de negócio, não de programação.
        conta.cidade = "São Paulo"; //adicionando dinamicamente uma variável "cidade", sem precisar declarar ela anteriormente.
        const valorSacado = this.sacar(valor); //this = chama o método para minha própria classe.
    }

}