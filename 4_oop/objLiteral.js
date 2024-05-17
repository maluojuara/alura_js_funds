const user = {
    nome: "Juliana",
    email: "j@jmail.com",
    nascimento: "2010/01/01", 
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

// user.exibirInfos(); // retorna Juliana j@jmail.com

// const exibir = user.exibirInfos;
// exibir(); // retorna undefined undefined - this perdeu o contexto

// // função fora do contexto daquele objeto
// // const exibir = function() {
// //     console.log(this.nome, this. email);
// // }

// const exibirCorreto = exibir.bind(user); // "prende" a execução da função ao contexto do objeto user (pode ser qualquer objeto, como parâmetro)

// exibirCorreto();

// // obs: não dá pra usar arrow function

// -------------------------------------------------------------- //

const admin = {
    nome: "Mariana",
    email: "m@mail.com",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log('curso criado!')
    }
}

// Herança de protótipo 
Object.setPrototypeOf(admin, user);
// dois parametros: herdeiro, doador

admin.criarCurso();
admin.exibirInfos();

// .__proto__ - apenas no console do navegador - cadeia de protótipo 
// chega até Object e depois em null 

// conclusão: tudo em JS por baixo dos panos é objeto!! 