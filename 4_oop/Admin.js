import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, numeroVagas) {
        return `Curso ${nomeCurso} criado com ${numeroVagas} vagas`
    }
}

