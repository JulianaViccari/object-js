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
let relatorio = "";

for(let info in cliente){ //percorre o objeto pela string da chave.
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    }else{
      relatorio += `${info} ==> ${cliente[info]}\n`
    }
  
}
console.log(relatorio)