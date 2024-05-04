// 06. Create a function that takes an array of numbers and returns the sum of all elements.

const numbers = [10, 8, 7, 5, 10];

const sumNumbers = numbers.reduce((sum, number) => sum + number, 0)


console.log(sumNumbers);