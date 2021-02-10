import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta { //extende tudo que tiver na classe Conta. Isto é a herança da Conta.
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia); //chama o constructor (neste caso) da classe superior (Conta). Consulta: mouse em cima de "super".
        ContaCorrente.numeroDeContas += 1;
    }

    //Comportamento adicionado. Vai sobrescrever o "sacar" de Conta. Porém, utiliza o comportamento "_sacar" da Conta, que é privado.
    sacar(valor) {
        let taxa = 1.1; //adicionado .1 (10%) para saques de conta corrente      
        return this._sacar(valor, taxa); //poderia ser usado super._sacar() também.
        //tubo bem usar o comportamento privado _sacar, pois estamos extendendo a "Conta", como estivemos mexendo diretamente nela.
    }
}