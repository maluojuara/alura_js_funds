const student = {
    firstName: 'José',
    lastName: 'Silva',
    age: 32,
    cpf: '89076543278',
    course:  'JavaScript',
    scholarshipHolder: true,
    phones: ['551199999998', '557999659801'],
    addresses: [{
        street: 'Avenida Mário Jorge',
        number: '45A',
        complement: 'ap. 43'
    }, 
    {
        street: 'Avenida Hermes Fontes',
        number: '498',
        complement: null
    }]
}

function showPhones (phone1, phone2) {
    console.log(`Call ${phone1}`);
    console.log(`Call ${phone2}`);
}

showPhones(...student.phones)