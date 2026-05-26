
let totalRecebido = 0, repasseCelso = 0, faturamentoSandro = 0, faturamentoSeguradoras = 0, clientes = 0;


document.getElementById('form-servico').addEventListener('submit', (evento) => {
    evento.preventDefault(); 

    let valor = parseFloat(document.getElementById('valor').value);
    let origem = document.getElementById('origem').value;
    
    
    let desconto = origem === 'seguradora' ? 0.30 : 0; 
    
    clientes++;
    if (clientes % 10 === 0) {
        alert(`Cliente nº ${clientes}! Desconto extra de 5% aplicado.`);
        desconto += 0.05;
    }

    let cobrado = valor * (1 - desconto);
    totalRecebido += cobrado;

    if (origem === 'seguradora') faturamentoSeguradoras += cobrado;
    else if (origem === 'indicacao') {
        repasseCelso += cobrado * 0.10;
        faturamentoSandro += cobrado * 0.90;
    } else faturamentoSandro += cobrado;

 
    document.getElementById('txt-total').innerText = "R$ " + totalRecebido.toFixed(2);
    document.getElementById('txt-sandro').innerText = "R$ " + faturamentoSandro.toFixed(2);
    document.getElementById('txt-celso').innerText = "R$ " + repasseCelso.toFixed(2);
    document.getElementById('txt-seguradora').innerText = "R$ " + faturamentoSeguradoras.toFixed(2);
    document.getElementById('txt-clientes').innerText = clientes;
    
    document.getElementById('valor').value = ''; 
});


document.getElementById('btn-limpar').addEventListener('click', () => {
    if (confirm("Zerar caixa?")) {
    
        totalRecebido = repasseCelso = faturamentoSandro = faturamentoSeguradoras = clientes = 0;
        
    
        document.getElementById('txt-total').innerText = document.getElementById('txt-sandro').innerText = document.getElementById('txt-celso').innerText = document.getElementById('txt-seguradora').innerText = "R$ 0.00";
        document.getElementById('txt-clientes').innerText = "0";
    }
});