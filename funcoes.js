const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: {
        residencial: "99 9999-9999",
        celular: "99 99999-9999",
    },
    saldo: 200,
    efetuaPagamento: function (valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente.")
        }else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado com sucesso. Novo saldo: ${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(25);
cliente.efetuaPagamento(30);