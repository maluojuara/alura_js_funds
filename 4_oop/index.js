import User from "./User.js";
import Teacher from "./Teacher.js";
import Admin from "./Admin.js";

// const novoAdmin = new Admin('Rodrigo', 'rodrigo@r.com', '2019-01-01');
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('Python para iniciantes', 20));

// console.log("\n-----------------------------------\n");


// const newTeacher = new Teacher('Mariana', 'mariana@m.com', '2022-01-01')
// console.log(newTeacher);
// console.log(newTeacher.exibirInfos());
// console.log(newTeacher.aprovarEstudante('Juliana', 'JavaScript'));

// console.log("\n-----------------------------------\n");

// const novoUser = new User('Juliana', 'j@j.com', '2020-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

const novoUser = new User('Juliana', 'j@j.com', '2020-01-01');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '2021-01-01');
console.log(novoAdmin.nome);

novoAdmin.nome = 'Andrea';
console.log(novoAdmin.nome);


// novoUser.#nome = 'Marcia'; // --> erro
// console.log(novoUser.#montaObjUser()); // --> erro

