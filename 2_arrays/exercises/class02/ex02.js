// 02. Create an array called numbers containing numbers from 1 to 10. Use the slice method to create a new array called partNumbers that contains only index numbers 3 to 7 of numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const partNumbers = numbers.slice(3, 8);

console.log(partNumbers);