



// -----------------------------MARUJOS---------------------------------------
function verificarProvisoes(){                              
    // Cria um bloco de código (função) chamado 'verificarProvisoes'

    let marujos, comida                                   
    // Declara variáveis (espaços na memória) para a quantidade de marujos e comida
    let comidaPorMarujo                                  
    // Declara a variável que vai guardar o resultado da divisão
    
    marujos = Number(prompt("Quantidade de marujos: "))
    // Pede o nº de marujos na tela, converte o texto para Número e guarda na variável
    comida = Number(prompt("Quilos de comida: "))     
    // Pede os kg de comida na tela, converte para Número e guarda
   
    comidaPorMarujo = comida / marujos              
    // Divide a comida pelo total de marujos e guarda o resultado
    if(marujos >= 10 && comidaPorMarujo >= 1.5){   
    // SE (if) tiver 10 ou mais marujos E (&&) a comida por pessoa for 1.5 ou mais:
        
    document.getElementById("resultadoProvisoes").innerHTML = "Provisões suficientes. Rumo ao horizonte!" 
    // Busca o ID no HTML e injeta essa mensagem de sucesso
    }

    else{  
         // SENÃO (else), caso a regra do 'if' não seja cumprida:
        document.getElementById("resultadoProvisoes").innerHTML = "Algo esta errado"  
        // document.write("Algo esta errado"  )
        // Busca o ID no HTML e injeta essa mensagem de erro
    }
}


// -----------------------------BRIQUE------------------------------------------

function calcularPrecoBrique(){                 
    // Cria a função 'calcularPrecoBrique'
   alert("Função executada")                  
    // Dispara um pop-up na tela avisando que a função começou
    
    let custo, venda                         
    // Declara as variáveis que vão guardar os valores de custo e venda

 custo = Number (prompt("Custo: "))        
 // Pede o valor do custo ao usuário, converte para Número e guarda

 venda = custo * 3                        
 // Calcula a venda multiplicando o custo recebido por 3

 alert("O valor é: " + venda.toFixed(2))
 // Mostra um pop-up com o valor calculado, fixando 2 casas decimais

 document.getElementById("resultadoBrique").innerHTML = "Valor: R$" + venda.toFixed(4) 
 // Escreve o resultado no HTML, agora com 4 casas decimais
 }


// -----------------------------MONIKA------------------------------------------

function calcularDaMonika(){                                     
// Cria a função 'calcularDaMonika'

let chance, n                                                
// Declara as variáveis 'chance' (resultado) e 'n' (input do usuário)

n = Number(prompt("Numero de vezes ao celular: "))             
// Pede o nº de vezes ao celular, converte para Número e guarda em 'n'

chance = (0.1/(1+500*n))*100                                
  // Executa a fórmula matemática usando o valor de 'n' informado

alert ("Chance de aprovação: " + chance.toFixed(4) + "%")   
// Mostra um pop-up com o resultado da chance, formatado com 4 casas decimais

console.log ("Aprovação: " + chance.toFixed(4) + "%")   
// Código inativo. Se ativado, imprimiria o resultado no painel oculto do navegador (F12)

document.getElementById("resultadoMonika").innerHTML = "chance: " + chance.toFixed(4) 
// Exibe o resultado final no corpo da página HTML
}

// -----------------------------Verificando a idade------------------------------------------


function verificarIdade(){
    let idade
    // Declara as variáveis 'chance' (resultado) e 'n' (input do usuário)
    idade = Number (prompt("Digite aqui a idade: "))
    if (idade >= 18){
    // SE (if) tiver 10 ou mais marujos E (&&) a comida por pessoa for 1.5 ou mais:
        document.getElementById("resultadoIdade").innerHTML = " Maior de idade:"
        // Exibe o resultado final no corpo da página HTML
    }

    else {
    // SENÃO (else), caso a regra do 'if' não seja cumprida:
        document.getElementById("resultadoIdade").innerHTML = "Menor de idade"

    }
}
// -----------------------------ADIVINHAR NUMERO------------------------------------------

function adivinharNumero(){
    let numero = Math.ceil(Math.random() * 10)
    // Gera um número aleatório entre 1 e 10 usando Math.random() e arredonda para cima com Math.ceil()
    let chute = Number(prompt("Adivinhe o número entre 1 e 10: "))
    // Pede ao usuário para adivinhar o número, converte para Número e guarda em 'chute' 
    if (chute === numero){
        document.getElementById("resultadoAdivinhar").innerHTML = "Parabéns! Você acertou o número: " + numero
        // Se o chute for igual ao número gerado, exibe mensagem de sucesso com o número correto
    } else {
        document.getElementById("resultadoAdivinhar").innerHTML = "Que pena! O número correto era: " + numero
        // Se o chute for diferente do número gerado, exibe mensagem de erro com o número correto      
    }
}
// -----------------------------PROXIMO TEXTO------------------------------------------



