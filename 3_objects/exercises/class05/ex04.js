// 04. Create an array of JavaScript objects representing animal information. Each object should contain at least the following properties:

// id (number): identifier of the animal.
// name (string): name of the animal.
// species (string): species of the animal.
// age (number): age of the animal.

const animals = [
    { id: 1, name: "Lion", species: "Feline", age: 5 },
    { id: 2, name: "Elephant", species: "Mammal", age: 10 },
    { id: 3, name: "Penguin", species: "Bird", age: 3 }
]

// Create a function called sortAnimals that takes a comparison function as a parameter to perform the array sorting.

function sortAnimals (comparisonFunction) {
    return animals.sort(comparisonFunction);
}

function compareAgeAscending (a, b) {
    return (a.age - b.age);
}

console.log(sortAnimals(compareAgeAscending));