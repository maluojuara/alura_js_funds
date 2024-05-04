const names = ["Ana", "Clara", "Maria", "Maria", "João", "João", "Ana"];

const namesNoRepeat = new Set (names);

const namesNoRepeatArray = [...namesNoRepeat]; // trasnform set to array

console.log(namesNoRepeat);
console.log(namesNoRepeatArray);

// unique values 
// array like - not the same methods