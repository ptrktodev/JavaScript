const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "EcoVille",
    estudante: true,
    myPhrase: () => {
        console.log("O amor é a compensação da morte.");
    },
};

console.log("O nome é: " + pessoa.nome);
console.log("A idade é: " + pessoa.idade);
pessoa.myPhrase();
