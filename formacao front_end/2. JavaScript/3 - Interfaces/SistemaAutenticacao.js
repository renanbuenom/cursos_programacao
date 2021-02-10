export class SistemaAutenticacao{
    static login(funcionario, senha) {
        return funcionario.senha == senha; //vai avaliar a expressão (==) e retornar caso for verdadeira
    }
}