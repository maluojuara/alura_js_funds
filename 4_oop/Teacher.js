import User from "./User.js";

export default class Teacher extends User {
    constructor(nome, email, nascimento, role = 'teacher', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} teve aprovação no curso ${curso}.`;
    }
}

