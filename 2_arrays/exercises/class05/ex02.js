// 02. Create an array of numbers called values. Then, write a program that adds all the elements of this array using the reduce method.

const values = [10, 8, 7, 5, 10];

const sumValues = values.reduce((sum, value) => sum + value, 0)


console.log(sumValues);