programa {
  funcao inicio() {
    real precoQuilo = 10
    real precoPorGrama = precoQuilo / 1000
    real peso
    real precoTotal

    escreva ("Digite o peso (G)")
    leia (peso)
    precoTotal = peso * precoPorGrama
    escreva ("Valor a pagar: R$ " + precoTotal)

  }
}
