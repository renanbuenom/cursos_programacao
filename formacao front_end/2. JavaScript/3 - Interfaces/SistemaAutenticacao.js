/* Ser autenticavel = ter o método autenticar */

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha); //retorna true.
        }
        return false; //O sistema retorna falso, ao invez de dar um erro no programa.
    }

    //Precaver algum tipo de erro, é uma maneria segura de validar se realmente o sistema de autenticação recebeu alguém que realmente é autenticável.
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && //operador IN verifica se a chave "autenticar" existe dentro do objeto autenticavel (cliente, gerente ou diretor) e retorna true.
        autenticavel.autenticar instanceof Function /*verifica se o autenticar que existe dentro do autentical é uma FUNÇÃO (instância dentro da função)
            e não só a palavra "autenticar"*/
    }

    /* Retirado, preferível ter um método autenticar (dentro de cada Classe de usuário: Cliente, Gerente e Diretor), que é mais seguro
    return autenticavel.senha == senha; //vai avaliar a expressão (==) e retornar caso for verdadeira.
    Ser autenticavel, neste caso: significaria ter a propriedade "senha" */
}

//O SistemaAutenticacao se preocupa mais com a interface que os objetos expoem, do que o tipo dele de fato. 