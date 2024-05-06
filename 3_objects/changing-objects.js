const student = {
    firstName: 'José',
    lastName: 'Silva',
    age: 32,
    cpf: '89076543278',
    course:  'JavaScript'
}

student.telephone = '551199999999';
console.log(student.telephone);

console.log(student);

// OBS: objects are not ordered (like an array, for example)

student.firstName = 'João';
student.lastName = 'Souza';

console.log(student);