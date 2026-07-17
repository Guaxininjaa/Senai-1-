programa {
  funcao inicio() {
   real salario,moradia,agua,luz,internet
    real gasolina,streamings,telefone,outros
    real saldoFinal
   // // // // // // // // Mano juca \\ \\ \\ \\ \\ \\ \\ \\

        escreva("salário do Juca: ")
        leia(salario)

        escreva("Valor da moradia: ")
        leia(moradia)

        escreva("Valor da Agua: ")
        leia(agua)

        escreva("Valor da Luz: ")
        leia(luz)

        escreva("Valor da internet: ")
        leia (internet)

        escreva("Valor da Gasolina: ")
        leia (gasolina)

        escreva("Valor da Streamings: ")
        leia (streamings)
        
        escreva("Valor do Telefone: ")
        leia (telefone)

        escreva ("Outros: ")
        leia (outros)

        saldoFinal = salario - (moradia + agua + luz + internet + gasolina + streamings +telefone + outros)
        escreva ("\nSaldo do seu salario foi: R$ " + saldoFinal) 


  }

}
