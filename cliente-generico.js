function Cliente(nome,cpf,email,saldo){
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function(valor){
    this.saldo += valor
  }
}
const juliana = new Cliente("Juliana", "255365254-55", "ju@gmail.com", 200)

console.log(juliana);