function calcularPrecoBrique(){
    alert("Função executada")
    // INFOS 
    let custo, venda

 custo = Number (prompt("Custo: "))
 venda = custo * 3

 alert("O valor é: " + venda.toFixed(2)) 

 document.getElementById("resultadoBrique").innerHTML = "Valor: R$" + venda.toFixed(4)
 


}
function calcularDaMonika(){

    let chance, n   

n = Number(prompt("Numero de vezes ao celular: "))
chance = (0.1/(1+500*n))*100

alert ("Chance de aprovação: " + chance.toFixed(4) + "%")
// console.log ("Aprovação: " + chance.toFixed(4) + "%")
document.getElementById("resultadoMonika").innerHTML = "chance: " + chance.toFixed(4)

    
}