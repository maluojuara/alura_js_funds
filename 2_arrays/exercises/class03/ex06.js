// 06. Create a program that calculates the average of the numbers present in an array using a for loop.

const numbers = [10, 8, 6, 9, 7, 5];

let sum = 0;

for (let number of numbers) {
    sum += number;
}

const average = sum / numbers.length;

console.log(average);