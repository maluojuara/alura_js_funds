// 05. Create a bidimensional list with 3 rows and 3 columns, where each element is a 3x3 matrix with values ​​starting at 1 and increasing by 1 for each element.

// Tips:

// start with an empty array, for example const array = [] and add values ​​to it with push;
// you can solve it using a for inside another for.

let matrix = [];
let initialValue = 1;

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(initialValue);
    initialValue++;
  }
  matrix.push(row);
}

console.log('bidimensional list:');
console.log(matrix);