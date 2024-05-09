// 01. Create a file named infoPerson.js. In this file, create an object called person that represents information about a person. This object should have the following properties:

// name (string): Person's name.
// age (number): Person's age.
// single (boolean): Marital status indicator (true if single, false if married).
// hobbies (array): List of person's hobbies.

// Add values to each property of the person object. Use fictional values to simulate a specific person.

// Create a function called showPersonInfo that accepts the person object as a parameter and prints all the person's information in the console.

// At the end of the infoPerson.js file, call the showPersonInfo function passing the person object as an argument.

// Hint: you can use an array method to remove the elements from the brackets and display them as text.


const person = {
    firstName: 'Mariana',
    age: 42,
    single: false,
    hobbies: ['Dancing', 'Embroidery', 'Reading', 'Movies'] 
}

function showPersonInfo (personObj) {
    console.log(`This person is called ${personObj.firstName} and has ${personObj.age} years old.`);
    console.log('This person is ' + (personObj.single ? 'single.' : 'married.'));
    console.log(`The hobbies of this person are ${personObj.hobbies.join(", ")}.`);
}

showPersonInfo(person);