// -------------------------Contador--------------------------------------------------------------

let cont = 0
function IncrementarContagem(){
cont = cont + 1
document.getElementById('p-contagem').innerHTML = cont
}

function DecrementarContagem(){
cont = cont - 1
document.getElementById('p-contagem').innerHTML = cont
}   

let global = 'Eu sou uma variavel global :/'
function funcao1() {
let local = 'Sou uma variavel local :D'
console.log(local);
console.log(global);
}

function funcao2(){
console.log(local);
console.log(global);
}

function ResetarContagem(){
cont = 0
document.getElementById('p-contagem').innerHTML = cont
}

function Adicionar10(){
cont = cont + 10
document.getElementById('p-contagem').innerHTML = cont
}   

function Subtrair10(){
cont = cont - 10
document.getElementById('p-contagem').innerHTML = cont
}
// -------------------------Harry Ploter--------------------------------------------------------------
// function registrarVenda(){
//     // Pega o valor digitado no input
//     let valor = document.getElementById('inputVenda').value;

//     // Seleciona o elemento onde os números vão aparecer
//     let painelVendas = document.getElementById('p-totalVendido');

//     // Pega o HTML que já existe lá e adiciona o novo valor + uma quebra de linha (<br>)
//     painelVendas.innerHTML = painelVendas.innerHTML + valor + "<br>";

//     // Dica extra: Limpa o campo de digitação para você não precisar apagar na mão na próxima venda
//     document.getElementById('inputVenda').value = "";
// }

let total = 0
function registrarVenda(){
    let valor = Number(document.getElementById('inputVenda').value)
    
    total = total + valor
  
    document.getElementById('totalVendido').innerHTML =  
    'Total de vendas: R$' + total.toFixed(2)

    
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) + '<br>'
    
    document.getElementById('inputVenda').value = ''
    document.getElementById('inputVenda').focus()
    console.log(valor)
}
    function zerarVendas() {
    total = 0;
    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$0.00';
    document.getElementById('listaVendas').innerHTML = '';
console.log(valor)
}
    document.getElementById('inputVenda').addEventListener('keyup', tratarTecla ) 
    function tratarTecla(e){
    console.log(e)
        if(e.key == 'Enter'){
        registrarVenda()
    }}


 



