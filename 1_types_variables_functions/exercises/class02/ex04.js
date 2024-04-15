// 04. Create a numeric variable and a string. Convert the numeric variable to string and string to number. Display the resulting data types in the console.

const varNumber = 23;
const varString = "10";

const varNumberConv = String(varNumber);
const varStringConv = Number(varString);

console.log("The data type after conversion to string is", typeof varNumberConv);
console.log("the data type after conversion to number is", typeof varStringConv);
