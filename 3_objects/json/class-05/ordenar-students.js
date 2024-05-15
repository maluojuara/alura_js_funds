const estudantes = require('./estudantes.json');

function ordenar (listaDeEstudantes, propriedade) {
    return listaDeEstudantes.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    }) 
}

const listaOrdenada = ordenar(estudantes, 'nome');
console.log(listaOrdenada);