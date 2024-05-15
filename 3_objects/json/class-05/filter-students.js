const estudantes = require('./estudantes.json');

function filtrarPorPropriedade (listaDeEstudantes, propriedade) {
    return listaDeEstudantes.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

const listaEnderecosSemCep = filtrarPorPropriedade(estudantes, "cep");
console.log(listaEnderecosSemCep);