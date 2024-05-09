// 03. Use the car object from exercise 2 with the initial properties (brand, model, year, color) and add:

// on: a boolean property indicating whether the car is on or off.

// turnOn: a method that prints a message on the console indicating that the car is turned on.

// turnOff: a method that prints a message on the console indicating that the car is turned off. Note: if the car is already on (on = true), it cannot be turned on again and vice versa.

// getDetails: a method that returns a string containing all the car details (brand, model, year, color, on/off state).

const car = {
    brand: 'Suzuki',
    model: 'Jimny',
    year: 2018,
    color: 'grey',
    on: true,

    turnOn: function () {
        if (!this.on) {
            this.on = true;
            return console.log(`the car is turned on`)
        }
        return console.log(`the car is already turned on`)
    },

    turnOff: function () {
        if (!this.off) {
            this.on = false;
            return console.log(`the car is turned off`)
        }
        return console.log(`the car is already turned off`)
    },

    getDetails: function () {
        const state = this.on ? 'the car is on' : 'the car is off';
        return `*Car details*\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}\nColor: ${this.color}\nState: ${state}`
    }
}

// Next, do the following:

// Call the turnOn and turnOff methods of the car object and print the resulting messages on the console.
// Call the getDetails method and print the returned string on the console.

car.turnOn();
car.turnOff();

console.log('------------------')
console.log(car.getDetails());