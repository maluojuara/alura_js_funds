import User from "./User.js";

class Teacher extends User {
    constructor(nome, email, nascimento, role = 'teacher', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} teve aprovação no curso ${curso}.`;
    }
}

const newTeacher = new Teacher('Mariana', 'mariana@m.com', '2022-01-01')

console.log(newTeacher);
console.log(newTeacher.exibirInfos());
console.log(newTeacher.aprovarEstudante('Juliana', 'JavaScript'));