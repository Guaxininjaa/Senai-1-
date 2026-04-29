function calcularPrecoBrique(){
    alert("Função executada")
    // INFOS 
    let custo, venda

 custo = Number (prompt("Custo: "))
 venda = custo * 3

 alert("O valor é: " + venda.toFixed(2)) 

 document.getElementById("resultado") .innerHTML = "Valor: R$" +  venda.toFixed(2)
 



}