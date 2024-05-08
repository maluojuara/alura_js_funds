const student = {
    firstName: 'José',
    lastName: 'Silva',
    age: 32,
    cpf: '89076543278',
    course:  'JavaScript',
    scholarshipHolder: true,
    phones: ['551199999998', '551199999898'],
    grade: 7.5,
    isApproved: function(gradeRequired) {
        return this.grade >= gradeRequired;
    }
};

console.log(student.isApproved(7)); // returns true

// in this case, arrow functions are not indicated at objects