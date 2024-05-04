// 01. Use the forEach method to print each element of an array along with its index.


// const meuArray = ['a', 'b', 'c', 'd', 'e'];

// meuArray.forEach((elemento, indice) => {
//   console.log(`Índice: ${indice}, Valor: ${elemento}`);
// });

const array = ["banana", "grapes", "apple", "coconut", "papaya"];

let index = 0;

array.forEach(function(element) {
    console.log(element, "| index: ", index);
    index++;
})

