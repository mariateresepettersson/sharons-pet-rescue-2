const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//create a factory function that can recieve 2 parameters 

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzzz...`);
            this.isTired = 1;
        },
        play: function () {
            if (this.isTired === 10) {
                console.log(`Too tired to play.`);
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
        }
    };
    return pet;
};

//Declare variables and create objects
const sora = createPet("Sora", "ferret");

const clover = createPet("Clover", "rabbit");

const baxter = createPet("Baxter", "hamster");

const cleo = createPet("Cleo", "rat");

const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

//clover.sleep();
//baxter.play();

//console.log(clover, baxter);

//Change values for isTired
clover.isTired = 8;
francine.isTired = 9;

//Create an array with all the 5 objects as elements
const allPets = [
    sora,
    clover,
    baxter,
    cleo,
    francine
]

//console.log(allPets);

//Declare a function to show pets in the browser
const showPets = function (petArray) {
    pets.innerHTML = "";

    for (let pet of petArray) {
        let status = "ready to play!";
        if (pet.isTired >= 7) {
            status = "sleeping.";
        }
        const li = document.createElement("li");
        li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li);
    }
};

statusButton.addEventListener("click", function () {
    showPets(allPets);
});