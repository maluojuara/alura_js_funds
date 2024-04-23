// 06. Access and print the element in the second row and third column of the two-dimensional matrix list created in the previous exercise.

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
console.log("element: ", matrix[1][2]);