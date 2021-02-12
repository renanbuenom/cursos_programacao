/* Ser autenticavel = ter o método autenticar */

export class SistemaAutenticacao{
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha);
        
        /* Retirado, preferível ter um método autenticar, que é mais seguro
        return autenticavel.senha == senha; //vai avaliar a expressão (==) e retornar caso for verdadeira.
        Ser autenticavel, neste caso: significaria ter a propriedade "senha" */
 */
    }
}

//O SistemaAutenticacao se preocupa mais com a interface que os objetos expoem, do que o tipo dele de fato. 