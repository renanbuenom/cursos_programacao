console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista, dinamicamente
listaDeDestinos.splice(1,1); //deletou 1 elemtento a partir da posição 1
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos)

// listaDeDestinos = 2 //daria erro pois a variável é constante.