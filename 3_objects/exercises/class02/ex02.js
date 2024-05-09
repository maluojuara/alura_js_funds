// 02. Add to the person object a new property called address. This property should be an object representing the person's address, with the following sub-properties:

// street (string): name of the street.
// city (string): name of the city.
// state (string): name of the state.
// Fill the sub-properties of the address object with fictional values.

// Modify the showPersonInfo function to include the person's address information when called.

// At the end of the infoPerson.js file, call the showPersonInfo function to verify if the updated information, including the address, is correctly displayed in the console.


const person = {
    firstName: 'Mariana',
    age: 42,
    single: false,
    hobbies: ['Dancing', 'Embroidery', 'Reading', 'Movies'] 
}

person.address = {
    street: 'Av. Mario Jorge',
    city: 'Aracaju',
    state: 'Sergipe'
}

function showPersonInfo (personObj) {
    console.log(`This person is called ${personObj.firstName} and has ${personObj.age} years old.`);
    console.log(`${personObj.firstName} is ` + (personObj.single ? 'single.' : 'married.'));
    console.log(`The hobbies of ${personObj.firstName} are ${personObj.hobbies.join(", ")}.`);
    console.log(`${personObj.firstName} lives at ${personObj.address.street}, in ${personObj.address.city}, in state of ${personObj.address.state}.`)
}

showPersonInfo(person);