// 03. Create a function that takes an array of integers and returns the sum of the elements.


function sumArray (array) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }

    return sum;
}

const array = [1, 2, 3, 5, 6];

console.log(sumArray(array));