/* Em resumo, enquanto o loop for...in pode ser usado para arrays, geralmente é mais apropriado 
para objetos, e o loop for...of é mais indicado para iterar sobre os valores de arrays. */

// Utilização: iterar sobre Array
const cores = ["vermelho", "verde", "azul"];

for (let cor of cores) {
    console.log(cor);
}
