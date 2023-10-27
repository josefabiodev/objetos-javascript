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
]

cliente.enderecos.push({
    rua: "R. da Flores",
    numero: 452,
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);