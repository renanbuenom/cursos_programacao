import { Cliente } from "./Cliente.js"
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const  diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("senha1");
const gerente = new Gerente ("Márcio", 5000, 98765432100);
gerente.cadastrarSenha("senha2");

const cliente = new Cliente("Laís", 12345677855, "456");
const estaLogado = SistemaAutenticacao.login(cliente, "456"); 

//const estaLogado = SistemaAutenticacao.login(gerente, "senha2"); 
/*Polimorfismo: podemos chamar "gerente","diretor" uo "cliente" que o SistemaAutenticacao interpreta da mesma forma.
funciona para qualquer objeto que tenha "senha" */

console.log(estaLogado);