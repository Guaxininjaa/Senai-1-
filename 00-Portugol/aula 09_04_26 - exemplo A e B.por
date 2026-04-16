programa {
  funcao inicio() {
    
    real a,b

    escreva ("Digite o primeiro numero: ")
    leia(a)
    escreva ("Digite o segundo numero: ")
    leia(b)
    se(a > b){
      escreva(" O primeiro numero é o maior: " + a)
      }senao{
        se(b>a){
          escreva(" O segundo numero é o maior: " + b)
        }senao{
          escreva("Os dois são iguais")
        }

      }


  }
}
