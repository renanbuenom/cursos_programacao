console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = " Salvador"; //agora lançando a cidade, vamos conferir se tem na listagem disponível

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos + "\n");

const podeComprar = idadeComprador >= 18 || estaAcompanhado //transformamos a primeira condicional em uma variável, para verificação;

let contador = 0;
let destinoExiste = false;
while(contador < 3) {

    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break; //achado oque queríamos, para o loop
    } 
    contador ++; //ou contador += 1/ ou contador = contador + 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem");   
} else {
    console.log("Desculpe, tivemos um erro!");
}

// teste