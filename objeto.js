// Objeto
const cliente = {
    nome: "José",
    idade: 32,
    cpf: "11122222333",
    email: "jose@gamil.com"
}

// Acessando propriedades do objeto
console.log(`Nome do cliente: ${cliente.nome} 
Idade: ${cliente.idade} anos
CPF: ${cliente.cpf}
Email: ${cliente.email}`);

// Outra forma de acessar
console.log(`Nome do cliente: ${cliente["nome"]} 
Idade: ${cliente["idade"]} anos
CPF: ${cliente["cpf"]}
Email: ${cliente["email"]}`);

// Adicionando e alterando
const pessoa = {
    nome: "Jose",
    profissao: "Engenheiro de software",
}

// adicionando
pessoa.telefone = "99 99999-9999";

console.log(pessoa);

//alterando
pessoa.nome = "José Fábio";

console.log(pessoa);