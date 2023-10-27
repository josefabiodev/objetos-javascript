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

// Retorna um array
const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}