const clientes = [{
  nome: "Ana",
  cpf: "123456-98",
  telefones: ["965524588", "325698744"],
  idade: 55,
  dependentes: [
    {
      nome: "Juliana",
      parentesco: "filha",
      dataNascimento: "06/02/1990"
    }],
},
{
  nome: "João",
  cpf: "1568456-98",
  telefones: ["96985412", "325699999"],
  idade: 60,
  dependentes: [
    {
      nome: "Gabriela",
      parentesco: "filha",
      dataNascimento: "06/02/1986"
    }],
}
]
let listaDependentes = [];

for(let i = 0; i < clientes.length; i++ ){
  listaDependentes.push(...clientes[i].dependentes);
}

console.table(listaDependentes);