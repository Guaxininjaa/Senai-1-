programa {
  funcao inicio() {
    real relatorioPF = 40
    real relatorioPJ = 33
    escreva ("Total de Relatorio: " )
    escreva (relatorioPF + relatorioPJ)
   
    real tempoRelatorioPF = 12
    real tempoRelatorioPJ = 42
    escreva ("\nTempo Total Trabalhado: ")
    real totalrelatorios = tempoRelatorioPF + tempoRelatorioPJ
    escreva (totalrelatorios)
    
    real valorTotalPF = 2350
    real valorTotalPJ = 8900
    escreva ("\nValor total recebido: ")
    real valorTotal = valorTotalPF + valorTotalPJ
    escreva (valorTotal)

    escreva ("\nA média de valor recebido para cada relatório PF: R$")
    real mediaValorPF = valorTotalPF / relatorioPF
    escreva (mediaValorPF)

    escreva ("\nA média de valor recebido para cada relatório PJ: R$")
    real mediaValorPJ = valorTotalPJ / relatorioPJ
    escreva (mediaValorPJ)

    escreva ("\nA média de tempo gasto por relatório PF: ")
    real mediaTempoPF = tempoRelatorioPF / relatorioPF
    escreva (mediaTempoPF)


  



  
  }
}
