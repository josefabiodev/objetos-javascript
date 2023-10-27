const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: {
        residencial: "99 9999-9999",
        celular: "99 99999-9999",
    }
}

cliente.endereco = {
    rua: "R. das Camélias",
    numero: 1242,
    apratamento: true,
    complemento: "ap 934",
}

console.log(cliente.endereco["rua"]);
console.log(cliente.telefone["celular"]);