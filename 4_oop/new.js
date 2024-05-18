// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exirbirInfos = function () {
//         return `${this.nome}, ${this.email}`;
//     }
// }

// // Constructor (new):
// // const novoUser = new User('Malu', 'malu@mail.com');
// // console.log(novoUser.exirbirInfos());

// function Admin(role) {
//     User.call(this, 'Malu', 'malu@mail.com');
//     this.role = role || 'estudante';
// }

// Admin.prototype = Object.create(User.prototype); // passa as propriedades de user para admin

// const novoUser = new Admin('admin');
// console.log(novoUser.exirbirInfos());
// console.log(novoUser.role);

const user = {
    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user);
novoUser.init('Juliana', 'j@j.com');
console.log(novoUser.exibirInfos());