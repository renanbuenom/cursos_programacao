console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15;
const estaAcompanhada = false; //booleano: true or false
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) { //executa se for true. Pode-se usar "estaAcompanhada == true"
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de Idade, não pode vender");
// }

//Diminuindo a leitura do código e retirando a duplicidade de comando.
if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("Aqui está sua passagem!"); //comprou
    listaDeDestinos.splice(1, 1); //após comprado, remove o destino (item da lista) disponível
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade, não posso vender a passagem");
    temPassagemComprada = false;
}

console.log("Embarque: \n") // \n: pular linha
if ((idadeComprador >= 18 || estaAcompanhado) && temPassagemComprada){
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);


