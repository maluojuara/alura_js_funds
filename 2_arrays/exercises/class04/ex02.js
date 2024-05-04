// 02. Create a function called executeOperationArray that takes two parameters: an array and a callback function that performs some mathematical operation. This function must iterate through each element of the array and apply the callback function to each of the elements, printing the result of the operation to the console.

function executeOperationArray (array, callbackFunction) {
    return array.map(callbackFunction);
}

function doubleNumber (num) {
    return num * 2;
}

const listNumbers = [1, 3, 6, 9, 2];

const listNumbersDouble = executeOperationArray(listNumbers, doubleNumber);

console.log(listNumbersDouble);