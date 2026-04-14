programa {
  funcao inicio() {
    real totalBruto
    real premiacoes, presentes, comissoes
    real totalbruto, lucro, falta
    escreva("Total Bruto: R$ ")leia(totalBruto)
    escreva ("Premiações: ")leia (premiacoes)
    escreva ("Presentes: ")leia (presentes)
    escreva ("Comissões: ")leia (comissoes)
    lucro = totalBruto - premiacoes - presentes - comissoes
    escreva ("O lucro foi: R$ " + lucro)
    
    real meta
    escreva ("\nEscreva a meta do dia: ") leia (meta)

    se (lucro >= meta){ 
      escreva (" Bateu a meta !", lucro - meta)
    }senao escreva("Não bateu a meta.")

    falta = meta - lucro 
    escreva ("\nFalta: ", falta)
    

    

  
    

   

    
    
   }
}
