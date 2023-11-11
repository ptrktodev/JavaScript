/* Em resumo, enquanto o loop for...in pode ser usado para arrays, geralmente é mais apropriado 
para objetos, e o loop for...of é mais indicado para iterar sobre os valores de arrays. */

// RECOMENDADO: Utilizando em Objetos:
const carro = { marca: "Toyota", modelo: "Camry", ano: 2020 };

for (let key in carro) {
    console.log(key + ": " + carro[key]);
}

// NÃO RECOMENDADO: Utilizando em Array:
const cores = ["vermelho", "verde", "azul"];

for (let indice in cores) {
    console.log(indice); // resultado: 0, 1, 2
}
