// Arrow Function
var repararString = (name) => {
    name = name.toLowerCase().trim();
    letter = name.charAt(0).toUpperCase();
    name = name.slice(1);
    name = letter.concat(name);
    console.log(name);
};

repararString("JOão AzEVEDO MAIA   ");

// Declaração de Função
function soma(a, b) {
    return (a + b) * 3;
}

console.log(soma(6, 3));
