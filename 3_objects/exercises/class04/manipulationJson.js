// a) Read the content of the animals.json file.

const rawData = require('./animals.json');

console.log("------------------------------------");
// c) Add a new animal to the array of animals. The new animal should have a unique id, name, type, and habitat.

const newAnimal = {
    "id": 4,
    "name": "Elephant",
    "type": "Mammal",
    "habitat": "Savannah"
}

rawData.animals.push(newAnimal);
console.log(rawData);
console.log(rawData.animals); // with animal "Elephant"

console.log("------------------------------------");
// d) Modify the habitat of an existing animal in the array of animals.

const animalToModify = rawData.animals.find(animal => animal.id === 2);
if (animalToModify) {
  animalToModify.habitat = "Antarctic";
}

console.log(rawData.animals); // habitat of penguin is now "Antartic"

console.log("------------------------------------");
// e) Remove an animal from the array of animals.

const animalToRemoveId = 3;

const indexToRemove = rawData.animals.findIndex(animal => animal.id === animalToRemoveId);

if (indexToRemove !== -1) {
    rawData.animals.splice(indexToRemove, 1);
}

console.log(rawData.animals); // without the snake

console.log("------------------------------------");
// f) Convert the modified object to a JSON string using JSON.stringify().

const animalsJsonString = JSON.stringify(rawData.animals, null, 2);

console.log(animalsJsonString);
