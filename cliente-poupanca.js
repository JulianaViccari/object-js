function Cliente(nome,cpf,email,saldo){
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function(valor){
    this.saldo += valor
  }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}
const juliana = new ClientePoupanca("Juliana", "255365254-55", "ju@gmail.com", 200,245)

console.log(juliana);

ClientePoupanca.prototype.depositarPoup = function (valor){ // adiciona ao protopipo ClientePoup um novo metódo
  this.saldoPoup += valor
}

juliana.depositarPoup(154)

console.log(`${juliana.nome}, seu saldo na poupança é: ${juliana.saldoPoup}`)

