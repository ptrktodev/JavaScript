var lista = [1, 2, 3, 4, 5, 6];

// criamos um novo Array com base no critério
var listaPar = lista.filter((i) => i % 2 == 0);
console.log(listaPar);

// criamos um novo Array; aplicando uma função para cada item iterado
var listaItemMultiplicado = lista.map((i) => i * 2);
console.log(listaItemMultiplicado);

// itera sobre os items e logo executa uma função
lista.forEach((i) => console.log(i * 2));
