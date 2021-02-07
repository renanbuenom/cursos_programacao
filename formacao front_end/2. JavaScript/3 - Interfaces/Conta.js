export class Conta {
    constructor(saldoInicial, cliente, agencia) {
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

    //Comportamentos
    sacar(valor) {
        let taxa = 1;      
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) { //só permite sacar o valorSacado se o tiver saldo disponível
            this._saldo -= valorSacado;
            return valorSacado;
        }
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