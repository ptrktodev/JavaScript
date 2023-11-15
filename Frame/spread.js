// Caso 1:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado1 = [array1, array2];

console.log(arrayCombinado1); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// Caso 2: Spread

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const arrayCombinado2 = [...array3, ...array4];

console.log(arrayCombinado2); // [ 1, 2, 3, 4, 5, 6 ]
