export class Cliente {
    /*Retirado da declaração. Já estão sendo declarados dentro do constructor (abaixo).
    nome;
    _cpf;*/

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar() {
        return true; //cliente sempre pode entrar 
    }
} 