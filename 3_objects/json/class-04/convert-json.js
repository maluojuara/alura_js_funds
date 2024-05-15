const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante); // convert from object to string

console.log(estudante);
console.log(stringEstudante);
console.log(typeof(stringEstudante));

const objEstudante = JSON.parse(stringEstudante); // convert from string to object

console.log(objEstudante.nome);
console.log(objEstudante);
console.log(typeof(objEstudante));