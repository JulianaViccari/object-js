class Cliente{
  constructor(nome,email,cpf,saldo){
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo
  }
   
  depositar(valor){
      this.saldo += valor
  }

  exibirsaldo(){
    console.log(this.saldo)
  }
}

class ClientePoupanca extends Cliente{
  constructor(nome,email,cpf,saldo,saldoPoupanca){
      super(nome,email,cpf,saldo)
      this.saldoPoupanca = saldoPoupanca
  }
  depositarPoupanca(valor){
    this.saldoPoupanca += valor
  }
}

const ju = new ClientePoupanca("Juliana", "ju@gmail.com", "25632532566", 120, 658);
//console.log(ju)

ju.depositarPoupanca(100);
console.log(ju)