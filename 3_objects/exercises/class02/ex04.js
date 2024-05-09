// 04. Create an object called "calculator" that will have the following methods:

// sum: a function that accepts two parameters and returns their sum.

// subtraction: a function that accepts two parameters and returns the subtraction of the second parameter from the first one.

// multiplication: a function that accepts two parameters and returns the result of multiplying them.

// division: a function that accepts two parameters and returns the result of dividing the first one by the second one. Make sure to handle division by zero, returning an appropriate message in that case.


const calculator = {
    sum: function(num1, num2) {return num1 + num2},
    subtraction: function(num1, num2) {return num1 - num2},
    multiplication: function(num1, num2) {return num1 * num2},
    division: function(num1, num2) {
        if (num2 === 0){
            console.log("You can't divide a number by 0!");
            return
        }
        return (num1 / num2)
    }
}

// a) Call each function within the "calculator" object, passing values as arguments, and print the results obtained to the console.

const num1 = 2;
const num2 = 4;

console.log(`${num1} + ${num2} = ${calculator.sum(num1, num2)}`);
console.log(`${num1} - ${num2} = ${calculator.subtraction(num1, num2)}`);
console.log(`${num1} * ${num2} = ${calculator.multiplication(num1, num2)}`);
console.log(`${num1} / ${num2} = ${calculator.division(num1, num2)}`);

// b) Add a new method called "calculateAverage" to the "calculator" object. This function should accept an array of numbers as a parameter and return the arithmetic mean of the values.

calculator.calculateAverage = function(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    average = sum / numbers.length;
    return (average)
}

// c) Call the "calculateAverage" function passing an array of numbers and print the result obtained to the console.

const numbers = [7, 8, 9, 10];

console.log(`The average of ${numbers.join(', ')} is ${calculator.calculateAverage(numbers)}`);