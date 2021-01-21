console.log("Trabalhando com atribuição de variáveis");

const idade = 26;
let nome = "Renan";
const sobrenome = "Machado";

//console.log (nome + " " + sobrenome); mesmo resultado
console.log (nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`); //utilizando a crase

nome = nome + sobrenome; //operação sobescrita, já que está alterando seu valor

//Exemplo de variável mutável:
let contador = 0;
contador = contador + 1;

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade + 1;
console.log(idade);