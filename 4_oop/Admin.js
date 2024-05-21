import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, numeroVagas) {
        return `Curso ${nomeCurso} criado com ${numeroVagas} vagas`
    }
}

const novoAdmin = new Admin('Rodrigo', 'rodrigo@r.com', '2019-01-01');

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('Python para iniciantes', 20));