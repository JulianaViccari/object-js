let cliente = {
  nome: "Ana",
  cpf: "123456-98",
    telefones: ["965524588", "325698744"],
  idade: 55,
  dependentes: [{
    nome: "Juliana",
    parentesco: "filha",
    dataNascimento: "06/02/1990"
  }]
}
cliente.dependentes.push({
    nome: "Osmair",
    parentesco: "filho",
    dataNascimento: "06/02/1980"}) // acrescenta atributo no objeto
  
cliente.telefones.forEach(fone => {
  console.log(fone) //printa todos os telefones
});

cliente.dependentes[0].nome = "Juliana Viccari" // altera o valor da chave nome
console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === "06/02/1990" );

console.log(filhaMaisNova[0].nome)