const student = {
    firstName: 'José',
    lastName: 'Silva',
    age: 32,
    cpf: '89076543278',
    course:  'JavaScript',
    scholarshipHolder: true,
    phones: ['551199999998', '551199999898'],
    addresses: [{
        street: 'Avenida Mário Jorge',
        number: '45A',
        complement: 'ap. 43'
    }, 
    {
        street: 'Avenida Hermes Fontes',
        number: '498',
        complement: 'house 5A'
    }]
}

for (let key in student) {
    console.log(key);
    console.log(student[key]);
}