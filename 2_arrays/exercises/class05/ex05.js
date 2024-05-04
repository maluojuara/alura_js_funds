// 05. Create a function that filters numbers in an array that are multiples of 3 and greater than 5.

function filterNumbers (numbers) {
    const filteredNumbers = numbers.filter(number => number % 3 === 0 && number > 5);

    return filteredNumbers;
}

numbers = [2, 3, 6, 7, 10, 89, 80, 60];

console.log(filterNumbers(numbers));