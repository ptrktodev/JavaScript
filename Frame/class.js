class Animal {
    constructor(name, sound, habitat) {
        this.name = name;
        this.sound = sound;
        this.habitat = habitat;
    }

    Eat() {
        return `${this.name} se alimenta.`;
    }
}

class Mamiferos extends Animal {
    constructor(name, sound, breastfeed, canFly, canSwim, canRun) {
        super(name, sound); // Chama o construtor da classe pai
        this.breastfeed = breastfeed; // Mamar
        this.canFly = canFly;
        this.canSwim = canSwim;
        this.canRun = canRun;
    }

    Fly() {
        if (this.canFly) {
            return "voa.";
        } else {
            return "não voa.";
        }
    }
}

const Lion = new Mamiferos("Leão", "Rugir", true, false, false, true);
const Bat = new Mamiferos(
    "Morcego",
    "ecolocalização",
    true,
    true,
    false,
    false
);

console.log(`O ${Lion.name} ${Lion.Fly()} e são `);
console.log(`O ${Bat.name} ${Bat.Fly()}`);
console.log(`O ${Bat.name} ${Bat.Eat()}`); // Utilizando o metodo herdado.
