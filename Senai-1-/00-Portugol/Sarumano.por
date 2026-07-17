programa {
  funcao inicio() {
    inteiro bombas = 7
     real quantshow
      real precobomba
       real totalbombas
        real totalcompra

    escreva ("Digite a quantidade de shows: ")
    leia (quantshow)

    escreva ("Digite o preço de cada bomba: ")
    leia (precobomba)

    totalbombas = quantshow * bombas
    totalcompra = totalbombas * precobomba
    escreva ("\ntotal de bombas: ", totalbombas)
    escreva ("\nValor total de compra: R$ ", totalcompra)
  }
}
