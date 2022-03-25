// objetos são estruturas de dados compostas por chave e valor
let cliente = {
  nome: "Ana",
  cpf: "123456-98",
  telefone: "321456987",
  idade: 55
}

cliente["cep"] = "06445550"; // adiciona campo ao objeto

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago"
  },
  status: "desaparecido"
 }


const chaves = [ "nome", "cpf", "telefone", "idade", "cep"];

chaves.forEach(info => console.log(cliente[info])); // printa o objeto inteiro

delete objPersonagem.aliado // deleta atributo
console.log(objPersonagem.aliado)
 