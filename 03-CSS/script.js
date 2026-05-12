



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

// -----------------------------Dia de Semana-----------------------------------------
//  function diaDeSemana(){
//     let numero, dia
//     // Declara as variáveis 'numero' (input do usuário) e 'dia' (resultado)
//     numero = Number(prompt("Digite um número de 1 a 7: "))  
//     // Pede ao usuário para digitar um número de 1 a 7, converte para Número e guarda em 'numero'
    
// switch (numero) {                                         // Inicia a estrutura de escolha avaliando a variável 'numero'
// case 1:                                             // Caso o número seja 1...
// dia = "Segunda feira ";                           // ...a variável 'dia' recebe "Segunda feira "
// break                                                 // O 'break' interrompe a execução do switch
            
// case 2:                                           // Caso o número seja 2...
// dia = "Terça Feira";                             // ...a variável 'dia' recebe "Terça Feira"
// break                                            // Interrompe a verificação
            
// case 3:                                          // Caso o número seja 3...
// dia = "Quarta Feira";                            // ...a variável 'dia' recebe "Quarta Feira"
// break                                            // Interrompe a verificação
            
// case 4:                                          // Caso o número seja 4...
// dia = "Quinta Feira";                            // ...a variável 'dia' recebe "Quinta Feira"
// break                                            // Interrompe a verificação
            
// case 5:                                          // Caso o número seja 5...
//  dia = "Sexta Feira";                            // ...a variável 'dia' recebe "Sexta Feira"
// break                                            // Interrompe a verificação
            
// case 6:                                          // Caso o número seja 6...
// dia = "Sabado";                                  // ...a variável 'dia' recebe "Sabado"
// break                                            // Interrompe a verificação
            
// case 7:                                          // Caso o número seja 7...
// dia = "Domingo";                                 // ...a variável 'dia' recebe "Domingo"
// break                                            // Interrompe a verificação
// default:                                         // Padrão de escape caso o valor não seja nenhum dos números de 1 a 7
// dia = "Número inválido";                         // ...a variável 'dia' recebe a mensagem de erro
// }                                                // Fecha o bloco do switch
    
//     document.getElementById("resultadoDiaDeSemana").innerHTML = "O dia correspondente é: " + dia; 
//     // Busca o <output> (ou <div>/<p>) no HTML pelo ID e injeta a mensagem final na tela
// }
 function diaDeSemana(){
    let numero, dia 
    numero = Number(prompt("Digite um número de 1 a 7: "))
if (numero === 1){
dia = "Segunda feira "
}else if (numero === 2){  
dia = "Terça Feira"                           
}else if (numero === 3){     
dia = "Quarta Feira"
}else if (numero === 4){        
dia = "Quinta Feira"
}   else if (numero === 5){
dia = "Sexta Feira"
}   else if (numero === 6){
dia = "Sabado"
}   else if (numero === 7){
dia = "Domingo"
}   else {
dia = "Número inválido"
}
document.getElementById("resultadoDiaDeSemana").innerHTML = "O dia correspondente é: " + dia
}      

// -----------------------------Verificando Números Pares---------------------------------------- FIM

// function verificarParidade(){

//     let numero, resultado
//     numero = Number(prompt("Digite um numero: "))
//     if (numero == 1){
//         resultado = "O numero é impar"
//     } else if (numero == 2){
//         resultado = "O numero é par"
//     } else if (numero == 3){
//         resultado = "O numero é impar"  
//     } else if (numero == 4){        
//         resultado = "O numero é par"
//     }   else if (numero == 5){
//         resultado = "O numero é impar"
//     }   else if (numero == 6){
//         resultado = "O numero é par"
//     }   else if (numero == 7){
//         resultado = "O numero é impar"
//     }   else if (numero == 8){
//         resultado = "O numero é par"
//     }   else if (numero == 9){
//         resultado = "O numero é impar"
//     }   else if (numero == 10){
//         resultado = "O numero é par"
//     }   else {
//         resultado = "Número inválido"
    
// }
// document.getElementById("resultadoParidade").innerHTML = resultado
// }
function verificarParidade(){

    let numero, resultado
    numero = Number(prompt("Digite um numero: "))           
    if (numero % 2 === 0){
        resultado = "O numero é par"
    } else
        resultado = "O numero é impar"
   
        document.getElementById("resultadoParidade").innerHTML = resultado
}
// -----------------------------Calculadora Simples------------------------------------------ FIM

function calculadoraSimples(){
    let num1, num2, operacao, resultado
    num1 = Number(prompt("Digite o primeiro numero: "))
    num2 = Number(prompt("Digite o segundo numero: "))
    operacao = prompt("Digite a operação (+, -, *, /): ")  
    if (operacao == "+"){
        resultado = num1 + num2
    }   else if (operacao == "-"){
        resultado = num1 - num2
    }   else if (operacao == "*"){
        resultado = num1 * num2
    }   else if (operacao == "/"){
        resultado = num1 / num2
    }
    document.getElementById("resultadoCalculadora").innerHTML = "O resultado é: " + resultado
}
// -----------------------------Senha Segura------------------------------------------------- FIM

function verificarSenha() {
    let senha, resultado
    senha = prompt("Digite a senha: ")
if (senha.length == 8) {resultado = "A senha contém exatamente 8 caracteres", alert(resultado)}
else if (senha.length < 8) {resultado = "A senha contém menos de 8 caracteres", alert(resultado)} 
else {resultado = "A senha contém mais de 8 caracteres", alert(resultado)}

document.getElementById("resultadoSenha").innerHTML = resultado
}
// -----------------------------Classificação de Notas---------------------------------------- FIM
function classificarNota() {
    let nota, resultado
    nota = Number(prompt("Digite a nota: "))
    if (nota >= 81 ) {
        resultado = "Aprovado"
    } else {
        resultado = "Reprovado"
    }
    document.getElementById("resultadoNota").innerHTML = "O aluno está: " + resultado
}
// -----------------------------Dona Bete---------------------------------------- FIM

function verificarMeta() {
    let valorBruto, valorPremiacao, presentes, comissoes, lucro
    valorBruto = Number(prompt("Digite o valor bruto: "))
    valorPremiacao = Number(prompt("Digite o valor da premiação: "))
    presentes = Number(prompt("Digite o número de presentes: "))
    comissoes = Number(prompt("Digite o valor das comissões: "))
    lucro = valorBruto - valorPremiacao - presentes - comissoes 
    if (lucro > 0) {
        document.getElementById("resultadoDonaBete").innerHTML = "Lucro de R$" + lucro.toFixed(2)
    }   else if (lucro < 0) {   
        document.getElementById("resultadoDonaBete").innerHTML = "Prejuízo de R$" + Math.abs(lucro).toFixed(2)
        // alert("Prejuízo de R$" + Math.abs(lucro).toFixed(2))
        let meta = Number(prompt("Digite o valor da meta: "))
    if(lucro > meta){
    document.getElementById("resultadoDonaBete").innerHTML += " - Meta atingida!"
    } 
    else {
    let faltou
    faltou = meta - lucro
    document.getElementById("resultadoDonaBete").innerHTML += " -  Meta não atingida "
    document.getElementById("resultadoDonaBete").innerHTML += "Faltou R$" + faltou.toFixed(2)
}}}

// -----------------------------StarUber---------------------------------------- FIM

// function verificarDistancia() {
    
//     let distancia, tempoViagem
//     let  velocidadeLuz = 300000
    
//     distancia = Number(prompt("Digite a distância em km: "));
//     tempoViagem = distancia / velocidadeLuz
    
//     document.getElementById("resultadoDistancia").innerHTML = "<br>" + "Tempo de viagem: " + tempoViagem + " segundos";    

    
//     if (tempoViagem > 60) {
//         document.getElementById("resultadoDistancia").innerHTML += "<br>" + (tempoViagem / 60) + " minutos";
//     } 
//     if (tempoViagem > 3600) {
//         document.getElementById("resultadoDistancia").innerHTML += "<br>" + (tempoViagem / 3600) + " horas";
//     }   
//     if (tempoViagem > 86400) { 
//         document.getElementById("resultadoDistancia").innerHTML += "<br>" + (tempoViagem / 86400) + " dias";
//     }   
//     if (tempoViagem > 2592000) {
//         document.getElementById("resultadoDistancia").innerHTML += "<br>" + (tempoViagem / 2592000) + " meses";
//     }
//     if (tempoViagem > 31104000) {
//         document.getElementById("resultadoDistancia").innerHTML += "<br>" + (tempoViagem / 31104000) + " anos";
//     }
// }
 function verificarDistancia() {
    
    let distancia, tempoSegundos
    let  velocidadeLuz = 300000 
    let elementoResultado = document.getElementById("resultadoDistancia")
    
    distancia = Number(prompt("Digite a distância em km: "))
    tempoSegundos = distancia / velocidadeLuz

    elementoResultado.innerHTML = "<br>" + "Tempo de viagem: " + tempoSegundos + " segundos";
    if (tempoSegundos > 60) {
        tempoMinutos = tempoSegundos / 60
        elementoResultado.innerHTML += "<br>" + tempoMinutos + " minutos";
    }
    if (tempoMinutos > 60) {
        tempoHoras = tempoMinutos / 60
        elementoResultado.innerHTML += "<br>" + tempoHoras + " horas";
    }
    if (tempoHoras > 24) {
        tempoDias = tempoHoras / 24
        elementoResultado.innerHTML += "<br>" + tempoDias + " dias";
    }    
}
// -----------------------------Não tem garçom de cara feia---------------------------------------- FIM

function verificarEmprestimo() {
    
    let salario, emprestimo, prestacoes, valorParcela
    let limite

    let elementoResultado = document.getElementById("resultadoEmprestimo")
    
    salario = Number(prompt("Digite o salário do colaborador: "))
    emprestimo = Number(prompt("Digite o valor do empréstimo: "))
    prestacoes = Number(prompt("Digite o número de prestações: "))

    
    valorParcela = emprestimo / prestacoes
    limite = salario * 0.3

    if (valorParcela <= limite) {
        elementoResultado.innerHTML = "Empréstimo aprovado! Valor da parcela: R$" + valorParcela.toFixed(2)
    } else {
        elementoResultado.innerHTML = "Empréstimo negado. Valor da parcela: R$" +  valorParcela.toFixed(2) + " excede o limite do salário."
    } 
}



