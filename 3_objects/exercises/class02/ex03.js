// 03. Create a list of people called "people", which will be an array containing objects. Each object should represent a person and contain the following properties:

// name (string): person's name.
// age (number): person's age.
// city (string): person's city of residence.
// Add at least three objects to the "people" list with fictional information about different people.

const people = [
    {firstName: 'João', age: 23, city: 'Aracaju'},
    {firstName: 'Mariane', age: 78, city: 'Salvador'},
    {firstName: 'Stella', age: 30, city: 'São Cristóvão'}
]

// a) Create a function called "showPeopleList" that accepts the "people" list as a parameter and prints the information of each person in the list to the console.

function showPeopleList(people) {
    people.forEach(person => {
        console.log(`${person.firstName} is ${person.age} years old and lives in ${person.city}.`);
    });
}

// b) Add a new person to the "people" list using the push method. Ensure that the new person has distinct information from the existing people in the list.

people.push({firstName: 'Guilherme', age: 2, city: 'Rio de Janeiro'});


// c) Call the "showPeopleList" function to verify if the information, including the new person, is displayed correctly in the console.

showPeopleList(people);

// d) Create a function called "filterByCity" that accepts the "people" list and a string "city" as parameters. The function should return a new list containing only the people who reside in the provided city. Call the "filterByCity" function passing the "people" list and a fictional city as arguments, and print the result obtained to the console.

