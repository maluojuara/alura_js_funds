// 05. Declare a variable using var outside of a code block (e.g., if statement) and another one inside that block. Try to access these variables both inside and outside the block using console.log and analyze the results. Repeat the same process using let and compare with the previous results.


// Using var

var out = "outside";

if (1 > 0) {
    var inside = "inside";
    console.log(out);
    console.log(inside);
}

console.log(out);
console.log(inside);


// Using let

let out_2 = "outside";

if (1 > 0){
    let in_2 = "inside";
    console.log(out_2);
    console.log(in_2);
}

console.log(out_2);
console.log(in_2); // error: in_2 is not defined