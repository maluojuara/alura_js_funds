// 07. Add a new element (for example, 15) in the third row and second column of the two-dimensional array list created earlier.

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

console.log("matrix before: ", matrix);

matrix[2][1] = 15;

console.log("matrix after: ", matrix);