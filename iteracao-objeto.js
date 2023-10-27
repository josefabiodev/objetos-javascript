const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: {
        residencial: "99 9999-9999",
        celular: "99 99999-9999",
    }
}

cliente.enderecos = [
    {
        rua: "R. das Camélias",
        numero: 1242,
        apartamento: true,
        complemento: "ap 934",
    }
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o velor ${cliente[chave]}`);
    }
}