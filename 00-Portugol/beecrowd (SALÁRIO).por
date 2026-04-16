programa {
  funcao inicio() {
     inteiro numeroFuncionario
    real horasTrabalhadas
    real valorHoraTrabalhada
    real salarioFuncionario 
    escreva ("Número do funcionário: ")
    leia (numeroFuncionario)
    escreva ("Horas trabalhadas: ")
    leia (horasTrabalhadas)
    escreva ("Valor da hora trabalhada: R$ ")
    leia (valorHoraTrabalhada)
    escreva ("Número: " + numeroFuncionario)
    salarioFuncionario = horasTrabalhadas * valorHoraTrabalhada
    escreva ("\nSalário: R$ " + salarioFuncionario)
  }
}
