// 05. Create a program that uses a for loop to traverse a const array numbers = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] and display only the even numbers contained in this array in the console.


const numbers = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let number of numbers) {
    if (number % 2 === 0){
        console.log(number);
    }
}