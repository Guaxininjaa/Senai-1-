let total = 0;
let contagem = {};

function rolar(nomeDado, lados) {
    // Sorteia o número e soma ao total
    let valor = Math.floor(Math.random() * lados) + 1;
    total += valor;
    
    // Soma +1 na contagem do dado específico
    contagem[nomeDado] = (contagem[nomeDado] || 0) + 1;

    // Atualiza os textos principais
    document.getElementById('total').innerText = total;
    document.getElementById('ultimo').innerText = valor;

    // Bônus 1: Adiciona o histórico no topo da lista
    document.getElementById('historico').innerHTML = `<li>${nomeDado}: tirou ${valor}</li>` + document.getElementById('historico').innerHTML;

    // Bônus 2: Recria a lista de quantidades baseada no objeto "contagem"
    document.getElementById('quantidades').innerHTML = Object.entries(contagem)
        .map(([dado, qtd]) => `<li>${dado}: ${qtd}x</li>`).join('');
        console.log(contagem);
}

// Botão de Reset
document.getElementById('btn-reset').onclick = () => {
    total = 0;
    contagem = {};
    document.getElementById('total').innerText = "0";
    document.getElementById('ultimo').innerText = "-";
    document.getElementById('historico').innerHTML = "";
    document.getElementById('quantidades').innerHTML = "";
    console.log("Jogo resetado!");
};