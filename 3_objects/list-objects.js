const student = {
    firstName: 'José',
    lastName: 'Silva',
    age: 32,
    cpf: '89076543278',
    course:  'JavaScript',
    scholarshipHolder: true,
    phones: ['551199999998', '551199999898'],
    adresses: [{
        street: 'Avenida Mário Jorge',
        number: '45A',
        complement: 'ap. 43'
    }]
};

console.log(student.adresses);
console.log(student.adresses.street); // returns undefined

console.log(student.adresses[0].street); // returns the street

student.adresses.push({
    street: 'Avenida Mário de Andrade',
    number: '287',
    complement: ''
})

console.log(student.adresses);
console.log(student.adresses[1]);