programa {
  funcao inicio() {
   real preco, trocas, vale
   inteiro pares = 100
   escreva("Preço: R$ ")leia(preco)
   escreva("Troca: ")leia(trocas)
   se (preco <= 0 ou trocas <= 0) {
      escreva("\nPreço e trocas precisam ser maiores que zero.")
    }
    senao se (trocas > pares) {
      escreva("\nEntre em contato com a fábrica.")
    }
    senao {
      vale = preco * trocas
      escreva("\nValor do vale: R$ ", vale)
    }
  }
}