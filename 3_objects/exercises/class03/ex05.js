// 05. Create a new object called "newCar" to represent the information of a new car. The object should have the following properties:

// brand (string): brand of the new car.
// model (string): model of the new car.
// year (number): year of manufacture of the new car.
// color (string): color of the new car.



const car = {
    brand: 'Suzuki',
    model: 'Jimny',
    year: 2018,
    color: 'grey',
    on: false
}

const newCar = {
    brand: 'Hyundai',
    model: 'Creta',
    year: 2022,
    color: 'white'
}


// Use the spread operator (...) to create a new object called "carWithNewDetails" that inherits all the properties of the "car" object and adds the properties of the "newCar" object.

const carWithNewDetails = {...car, ...newCar};

// Print the "carWithNewDetails" object to the console to verify the car's information with the new details.

console.log("Car with new details:");
console.log(carWithNewDetails);

// Modify the value of a property in the "carWithNewDetails" object and print the object again to the console to confirm the changes.

carWithNewDetails.year = 2024;
console.log("Car with new details:");
console.log(carWithNewDetails);


