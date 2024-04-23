// 01. Create a function that receives two arrays and concatenates them into a single array.

function concatenateArrays (array1, array2) {
    return array1.concat(array2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray); 