//Classe Abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) { //Bloqueio: em index, não deve ser chamada diretamente, apenas como Corrente ou Poupança
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata");
        }
        this._saldo = saldoInicial; //sempre iniciar as propriedades como privadas como padrão, posteriormente pode-se retirar.
        this._cliente = cliente;
        this._agencia = agencia;
        /*Retirado, não é interessante pois teríamos que classificar todos os comportamentos abaixo
        this._tipo = tipo; */
    }

    //Acessores
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Método Abstrato
    sacar(valor) {
        throw new Error("O método Sacar da Conta é abstrato, deve ser sobrescrito em outra classe")
        /* Retirado do código, não queremos correr o risco de em outra conta não ser definida a taxa
        let taxa = 1; //taxa padrão. Onde não for,alterar o valor dentro da classe (ContaCorrente);
        return this._sacar(valor, taxa); */
    }

    _sacar(valor, taxa) { /*Comportamento privado, as outras classes (ContaCorrente e Poupança) vão se referenciar dele,
            mas alterando o "sacar" (caso altere a taxa).*/
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) { //só permite sacar o valorSacado se o tiver saldo disponível
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0; //retorna caso não tenha saldo suficiente (if acima);
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }

        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}