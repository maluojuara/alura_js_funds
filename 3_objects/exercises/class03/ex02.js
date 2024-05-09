// 02. Create an object called car that represents the information of a vehicle. The object should have the following properties:

// brand (string): car brand.
// model (string): car model.
// year (number): car manufacturing year.
// color (string): car color.

const car = {
    brand: 'Suzuki',
    model: 'Jimny',
    year: 2018,
    color: 'grey'
}

// Use the for...in loop to iterate through all properties of the car object and print the name of the property and its value to the console.

// for (let key in car) {
//     console.log(`${key}: ${car[key]}`);
// }

// Add more properties to the car object to represent additional vehicle characteristics.

// Use the for...in loop again to iterate through all the updated properties of the car object and print the name of the property and its value to the console.

car.age = 2024 - car.year;
car.doors = 2;
car.is4x4 = true;

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}