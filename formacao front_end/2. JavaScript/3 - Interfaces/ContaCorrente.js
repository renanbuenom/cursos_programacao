import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta { //extende tudo que tiver na classe Conta. Isto é a herança da Conta.
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia); //chama o constructor (neste caso) da classe superior (Conta). Consulta: mouse em cima de "super".
        ContaCorrente.numeroDeContas += 1;
    }

    //Comportamento adicionado. Vai sobescrever o "sacar" de Conta
    sacar(valor) {
        let taxa = 1.1; //adicionado .1 (10%) para saques de conta corrente      
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) { //só permite sacar o valorSacado se o tiver saldo disponível
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
}