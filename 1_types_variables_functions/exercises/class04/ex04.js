// 04. Create a function that takes three numbers as parameters and determines which is the largest among them. Use conditional structures (if, else) to compare values ​​and determine the largest. Print the largest value to the console.


function biggestThree (num1, num2, num3){
    let biggestNumber = num1;

    if (num2 > biggestNumber){
        biggestNumber = num2;
    }

    if (num3 > biggestNumber){
        biggestNumber = num3;
    }

    return biggestNumber;
}

console.log(biggestThree(2, 6, 1));

console.log(biggestThree(1024, 8, 91));