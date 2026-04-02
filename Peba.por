programa {
    funcao inicio() {
        real vitorias
        real empates
        real pontos
        
        escreva("Vitórias: ")
        leia(vitorias)
        
        escreva("Empates: ")
        leia(empates)
        
        pontos = (vitorias * 3) + empates
        
        escreva("\nTotal de pontos: ", pontos)
    }
}
