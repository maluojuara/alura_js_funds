const students = require('./estudantes.json');

function findInformation (listOfStudents, key, value) {
    return listOfStudents.find((student) => student[key].includes(value));
}

const studentFound = (findInformation(students, 'nome', 'Blakeley'));
console.log(studentFound);

const studentFound2 = (findInformation(students, 'nome', 'xxxxxx'));
console.log(studentFound2); // returns undefined

const phoneStudent = (findInformation(students, 'telefone', "9045673092")); 
console.log(phoneStudent); 