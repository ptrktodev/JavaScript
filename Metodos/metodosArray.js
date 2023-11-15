var lista = [1, 2, 3, 4, 5, 6];

// criamos um novo Array com base no CRITÉRIO
var listaPar = lista.filter((i) => i % 2 == 0);
console.log(`resultado do filter: ${listaPar}`);

// CRIA um novo Array; aplicando uma função para cada item iterado
var listaItemMultiplicado = lista.map((i) => i * 2);
console.log(`resultado do filter: ${listaItemMultiplicado}`);

// itera sobre os items e logo executa uma função; NÃO cria um novo array
lista.forEach((i) => console.log(i * 2));

// Objetivo: tranformar o array em unico valor, executa uma função de callback
// para cada elemento do array, acumulando o resultado em um valor final
var lista = [1, 2, 3, 4, 5, 6];

const soma = lista.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0); // <- esse 0 (zero) no final significa o valor que o acumulador iniciará.

var media = soma / lista.length;

console.log(`Valor total: ${media}`);
