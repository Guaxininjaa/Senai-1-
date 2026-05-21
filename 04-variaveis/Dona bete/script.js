let totalArrecadado = 0;
let totalPago = 0;
let dinoEscolhido = "";
let rodadaGratis = false;

const idade = parseInt(prompt("Digite a sua idade para jogar!"));
if (isNaN(idade) || idade < 18) {
    alert("Você não tem idade suficiente para jogar!");
    exit();
}
const dinos = ["Espinossauro", "T-Rex", "Braquiossauro", "Velocirraptor", "Estegossauro", "Triceratopo", "Anquilossauro", "Parassaurolofo", "Alossauro", "Carnotauro"];

function escolherDino(nome) {
    dinoEscolhido = nome;
    document.getElementById('displaySeuDino').innerText = nome;
}

function escolhaAleatoria() {
    dinoEscolhido = dinos[Math.floor(Math.random() * dinos.length)];
    document.getElementById('displaySeuDino').innerText = dinoEscolhido;
}

function jogar() {
    let valor = parseFloat(document.getElementById('valorAposta').value);
    if (!dinoEscolhido || !valor) return alert("Escolha um dino e o valor!");

    let sorteado = dinos[Math.floor(Math.random() * dinos.length)];
    document.getElementById('displaySorteado').innerText = sorteado;

   
    let podePagar = (valor * 2) <= (totalArrecadado * 0.2);

    if (!rodadaGratis && dinoEscolhido === sorteado && podePagar) {
        totalPago += (valor * 2);
        alert("Você ganhou!");
        document.getElementById('btn50x').style.display = "block";
    } else {
        alert("Você perdeu!");
        rodadaGratis = false; 
    }
    totalArrecadado += valor;
}

function acessarPainel() {
    let senha = prompt("Senha:");
    if (senha === "6132") {
        alert("Saldo da casa: R$ " + (totalArrecadado - totalPago));
    } else {
        rodadaGratis = true;
        alert("Você ganhou uma rodada grátis");
    }
}

function trapaça50x() {
    alert("Ops! O sistema travou. Tente novamente!");
    document.getElementById('btn50x').style.display = "none";
}