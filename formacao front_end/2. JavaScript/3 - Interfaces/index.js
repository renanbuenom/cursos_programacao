import { Cliente } from "./Cliente.js"
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const  diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("senha1");
const gerente = new Gerente ("Márcio", 5000, 98765432100);
gerente.cadastrarSenha("senha2");

const estaLogado = SistemaAutenticacao.login(gerente, "senha2"); 
/*Polimorfismo: podemos chamar "gerente" ou "diretor" que o SistemaAutenticacao interpreta da mesma forma.
funciona para qualquer objeto que tenha "senha" */

console.log(estaLogado);