const palavra = "JavaScript";
const frase = "Hello World!";
const frase2 = "Hello,World!";
const word = "PATRICK RAFAELA";
const texto = "   Espaços em branco   ";

console.log(palavra.length); // tam: 10
console.log(palavra.charAt(4)); // S
console.log(palavra.concat(" ", palavra)); // JavaScript JavaScript
console.log(frase.indexOf("World")); // Retorna o índice da primeira ocorrência da substring ou -1 se n enctrda.
console.log(frase.slice(0, 5)); // Hello
console.log(palavra.toUpperCase()); // Resultado: JAVASCRIPT
console.log(palavra.toLowerCase()); // Resultado: javascript
console.log(frase.replace("Hello", "Olá")); // Olá World!
console.log(texto.trim()); // "Espaços em branco"
console.log(frase2.split(",")); // [ 'Hello', 'World!' ]

// Verifica se a string começa ou termina com a substring especificada.
console.log(word.startsWith("PATRICK")); // true
console.log(word.startsWith("patrick")); // false
console.log(word.endsWith("RAFAELA")); // true
