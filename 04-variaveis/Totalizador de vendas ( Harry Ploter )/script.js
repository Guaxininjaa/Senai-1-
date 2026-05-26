let total = 0;

function registrarVenda() {
    // Pega o valor digitado e converte para número
    let valor = Number(document.getElementById('inputVenda').value);

    
    // registrar venda no total
    total = total + valor;
    
    // atualizar total na página
    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$' + total.toFixed(2);

    // lista de vendas
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) + '<br>';

    // limpa o campo e foca nele novamente
    document.getElementById('inputVenda').value = '';
    document.getElementById('inputVenda').focus();

    console.log(valor);
}

function tratarTecla(e) {
    console.log(e);
    if(e.key === 'Enter') {
        registrarVenda();
    }
}

document.getElementById('inputVenda').addEventListener('keyup', tratarTecla);
function limparVendas() {
    total = 0;
    document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$0.00';
    document.getElementById('listaVendas').innerHTML = '';
}




 



