//Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves { }
let cliente = {
  nome: "Ana",
  cpf: "123456-98",
  telefones: ["965524588", "325698744"],
  idade: 55,
  dependentes: [
    {
      nome: "Juliana",
      parentesco: "filha",
      dataNascimento: "06/02/1990"},
    {
      nome: "Osmair",
      parentesco: "filho",
      dataNascimento: "06/02/1980"}
  ],
  saldo: 100,
  depositar: function(valor){ //comportamento do objeto
    this.saldo += valor // this. essa propriedade
  },
  sacar: function(valor){ //comportamento do objeto
    this.saldo -= valor // this. esse atributo
  },
}
console.log(`${cliente.nome} Seu saldo atual é ${cliente.saldo}`);
cliente.depositar(30);
console.log(`${cliente.nome} Seu saldo atual é ${cliente.saldo}`);
cliente.sacar(50);
console.log(`${cliente.nome} Seu saldo atual é ${cliente.saldo}`);

