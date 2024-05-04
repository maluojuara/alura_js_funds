// 05. Consider an array of integers.

const numbers = [6, 9, 12, 15, 18, 21];

// Use the forEach() method to multiply each element of the array by 3 and display the result of each multiplication in the console. 

numbers.forEach((number) => {
    number *= 3;
    console.log(number);
});

// Then, use the findIndex() method to find the index of the number 18 in the original array.

const index18 = numbers.findIndex(number => number === 18);

console.log(`Index of number 18 is: ${index18}`);