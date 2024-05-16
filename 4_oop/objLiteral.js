const user = {
    nome: "Juliana",
    email: "j@jmail.com",
    nascimento: "2010/01/01", 
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

// herança de protótipo 