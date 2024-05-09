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

const keysObj = Object.keys(student);
console.log(keysObj); // array with the keys of object as strings

if (!keysObj.includes('addresses')) {
    console.error('it is necessary to have at least one address')
}

// also exists Object.values() and Object.entries() 