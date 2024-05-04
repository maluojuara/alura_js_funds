// 01. Create a function that accepts multiple arrays as arguments and returns a single array containing all the elements of the given arrays, using Spread Operator.

function concatArrays (...arrays) {
    return [].concat(...arrays);
}

const array1 = [1, 2, 3];
const array2 = [9, 0, 8];
const array3 = [9, 89, 7];

console.log(concatArrays(array1, array2, array3));
