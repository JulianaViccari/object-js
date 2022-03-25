const colecionador = {
  nome: "João do Gibi",
  idade:41,
  tipocolecao: ["quadrinhos"],
    contato: ["joao@email.com"],

  adicionarTipo:function(propriedade,texto){
    this[propriedade].push(texto)
  }
 }

 console.log(colecionador);
 for(i = 0; i < 4; i++) {
  colecionador.adicionarTipo("tipocolecao","HQ"+i)
}

 console.log(colecionador.nome)
 console.log(colecionador);
