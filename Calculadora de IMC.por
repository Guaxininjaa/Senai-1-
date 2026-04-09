programa {
  funcao inicio() {
    real peso, altura

    escreva("Digite seu peso: ")
    leia (peso)
    escreva("Digite sua altura: ")
    leia(altura)
    
    real imc = peso/altura*altura

    se(imc <= 25 ){

    escreva("IMC esta a baixo de 25")
      }senao
      escreva("IMC ta está alto.")
   


  }
}
