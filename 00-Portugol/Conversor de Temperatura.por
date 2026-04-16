programa {
  funcao inicio() {
  real temperatura, fahrenheit

        escreva("Temperatura em Celsius: ")
        leia(temperatura)

        fahrenheit = (temperatura * 9/5) + 32

        escreva("Temperatura em Fahrenheit: ", fahrenheit, "\n")

        se (fahrenheit > 68) {
            escreva("Alerta: temperatura alta!\n")
        }
    }
}