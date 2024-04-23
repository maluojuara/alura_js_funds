// 04. Create two arrays called menuMain and menuDessert containing options from a restaurant's menu. Use the concat method to create a new menuComplete array containing all menuMain elements followed by menuDessert elements.

const menuMain = ['Fish', 'Chicken', 'Lasagna', 'Pizza'];

const menuDessert = ['chocolate cake', 'caramelized fruits', 'brigadeiro', 'ice cream'];

const menuComplete = menuMain.concat(menuDessert);

console.log("Check the complete menu: ", menuComplete);

