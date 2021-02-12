export class Funcionario {
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    get senha () {/*acessor para retornar a senha de maneira segura. Só atribui a senha se for chamado "cadastrarSenha". 
    O SistemaAutenticacao só se preocupa com o acessor get*/
        return this._senha;
    }
 
    cadastrarSenha(senha) {
        this._senha = senha;
    }

    autenticar(senha) {
        return senha == this._senha;
    }
}