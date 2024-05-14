// 5 - Create a JavaScript object representing information about a person. The object should contain the following properties:

// id (number): identifier of the person.
// nome (string): person's name.
// idade (number): person's age.

const person = {
    id: 2,
    name: "Mariana",
    age: 16
}

// Create a function that takes a JavaScript object and returns a new object. Use this function to make a copy of the original person object.

function copyObject (object) {
    const newObject = {...object};
    return newObject;
}

const personCopy = copyObject(person);
console.log(personCopy);

// Modify the copy of the object obtained through the function, adding or changing at least one property.

personCopy.age = 78;
personCopy.city = 'New York';

// Print both objects (the original and the modified one) to the console to verify that the changes made to the modified object did not affect the original object

console.log("original person: ", person);
console.log("original person: ", personCopy);




