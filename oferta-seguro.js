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

function oferecerSeguros(obj){
  const propsClientes = Object.keys(obj);
  if(propsClientes.includes("dependentes")){//verifica se a propriedade 'dependentes' é true ou false dentro do objeto.
    console.log(`Temos oferta de seguro de vida para você ${obj.nome}
    `);
  }  
}
oferecerSeguros(cliente);
console.log(Object.values(cliente));//retorna um array com os [valores] do objeto 
console.log(Object.keys(cliente));//retorna um array com os [chaves] do objeto
console.log(Object.entries(cliente));////retorna um array com os [chaves, valores] do objeto