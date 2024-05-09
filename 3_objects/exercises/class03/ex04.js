// // 04. In the car object, add a new property called "licensePlate" representing the vehicle's license plate. Set the "licensePlate" property as non-enumerable so that it is not listed when iterating through the object's properties.

// Use a for...in loop to iterate over the properties of the car object and print only the enumerable properties to the console.

// Use the Object.keys() method to get an array containing only the enumerable keys of the car object and print this array to the console.

// Try accessing the license plate property directly using car.plate and print the result obtained to the console.

const car = {
    brand: 'Suzuki',
    model: 'Jimny',
    year: 2018,
    color: 'grey',
    on: false,
    licensePlate: 'ABN9076'
}

Object.defineProperty(car, "licensePlate", { enumerable: false });

console.log("enumerable properties");
for (let prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}

const enumerableKeys = Object.keys(car);
console.log("\nEnumerable keys:");
console.log(enumerableKeys);

console.log("\nDirect access to license plate property:");
console.log(car.licensePlate);