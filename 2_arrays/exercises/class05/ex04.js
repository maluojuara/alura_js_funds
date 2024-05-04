// 04. Write a function that takes an array of numbers and returns an array containing only the even numbers.

const numbers = [1, 8, 2, 7, 3, 4];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);