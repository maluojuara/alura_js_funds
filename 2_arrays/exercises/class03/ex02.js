// 02. Create a function that receives an array and prints the index number and element to the console.


function printArray (array) {
    for (let i = 0; i < array.length; i++){
        console.log(`the element at index ${i} is ${array[i]}`);
    }
}

const letters = ['a', 'b', 'c', 'd', 'e'];

printArray(letters);