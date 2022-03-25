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

const juliana = new Cliente("Juliana", "ju@gmail.com", "25632532566", 120)


juliana.exibirsaldo()

console.log(juliana)