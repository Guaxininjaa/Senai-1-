programa {
  funcao inicio() {
    real gastos 
    real vendaIngressos
    real vendaItens
    
    escreva ("Valor gasto em suprimentos e mercadorias para operar o navio: R$")
    leia (gastos)
    escreva ("Faturamento em venda de ingressos: R$")
    leia (vendaIngressos)
    escreva ("Faturamento em venda de itens:")
    leia (vendaItens)

    real lucroReais
    lucroReais = gastos - vendaIngressos + vendaItens 
    escreva ("Lucro obtido em reais: R$" + lucroReais )

    real lucroPercentual
    lucroPercentual = (lucroReais / gastos) * 100
    escreva ("\nLucro percentual: ", lucroPercentual, "%")

  }
}