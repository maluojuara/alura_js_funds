const student = {
    firstName: 'José',
    lastName: 'Silva',
    age: 32,
    cpf: '89076543278',
    course:  'JavaScript'
}

// more complex data structures

console.log(student.firstName);
console.log(`the name of the student is ${student.firstName} ${student.lastName}`);
console.log(`the 3 first digits of student cpf is ${student.cpf.substring(0, 3)}`);

function showStudentInfo(objStudent, infoStudent) {
    return objStudent[infoStudent];
}

console.log(showStudentInfo(student, 'course'));
console.log(showStudentInfo(student, 'age'));


// not an error - returns undefined 
console.log(student.pet); 
console.log(student['pet']);
