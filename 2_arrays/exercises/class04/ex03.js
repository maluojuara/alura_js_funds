// 03. You received an array of numbers containing numeric values. Create a program that checks if a specific number is present in this array. If so, the program must return the position (index) of that number. Otherwise, if the number is not present, the program should return "-1".

const array = [9, 87, 7, 2, 5, 4, 78, 2];
const number = 78;

let position = -1;

for (let i =0; i < array.length; i++) {
    position = array[i] === number ? i : position;
}

console.log(`Number ${number} is at position ${position}`);