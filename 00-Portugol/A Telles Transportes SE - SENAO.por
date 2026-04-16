programa {
  funcao inicio() {
    real peso, distancia,volume,frete
    escreva ("Digite o peso: ") leia(peso) 
    se (peso <= 0) retorne escreva ("valor invalido")
    escreva ("Digite a distancia: ") leia(distancia)
    se (distancia <= 0)retorne escreva ("valor invalido")
    escreva("Escreva o volume: ") leia(volume)
    se (volume <= 0) retorne escreva ("valor invalido")
    se (peso ou distancia ou volume <=0){
      escreva ("Valor invalido")
    }senao{
    frete = 15 + 2*peso + 0.05*distancia + 10*volume
      escreva("Valor do Frete sera R$ ", frete)
    }
  }
}

