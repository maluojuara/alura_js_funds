// 04. Create a function that receives an array of integers and returns the smallest value and the largest value in the array, in the following format: 'the smallest number is X and the largest number is Y'.

function smallestAndLargest (array) {
    let smallest = 0;
    let largest = 0;

    for (let element of array) {
        if (element > largest){
            largest = element;
        }

        if (element < smallest) {
            smallest = element;
        }
    }

    return (`the smallest number is ${smallest} and the largest number is ${largest}`);
}

const array = [0, 8, -2, 92, 1987, 2, -6];

console.log(smallestAndLargest(array));