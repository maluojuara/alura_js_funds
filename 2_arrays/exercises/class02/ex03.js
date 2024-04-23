// 03. Given the fruits array containing fruits that we want to buy at the market:

// const fruits = ['Apple', 'Banana', 'Orange', 'Lemon', 'Pineapple']

// Use the splice method to remove the fruits at index 2 and 3, and then add the 'Kiwi' and 'Peach' fruits at those same indexes.


const fruits = ['Apple', 'Banana', 'Orange', 'Lemon', 'Pineapple'];

fruits.splice(2, 2, 'Kiwi', 'Peach');

console.log(fruits);