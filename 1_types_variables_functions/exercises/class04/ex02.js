// 02. Create a function that receives a person's age and returns whether they are of legal age (age >= 18). Print the result to the console.


function checksAge(personAge){
    if (personAge < 18){
        return "you are a minor";
    }
    return "you are legal age";
}

console.log(checksAge(18));
console.log(checksAge(16));