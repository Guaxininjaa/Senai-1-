let totalArrecadado = 0;
let totalPago = 0;
let dinoEscolhido = "";
let rodadaGratis = false;

let idade = prompt("Digite a sua idade para jogar!");

if (idade < 18) {
    alert("Você não tem idade para jogar!");
    document.body.innerHTML = "<h1>Volte quando tiver 18 anos!</h1>";
} else {
    alert("Bem-vindo ao jogo!");
}

let dinos = ["Espinossauro", "T-Rex", "Braquiossauro", "Velocirraptor", "Estegossauro", "Triceratopo", "Anquilossauro", "Parassaurolofo", "Alossauro", "Carnotauro"];

function escolherDino(nome) {
    dinoEscolhido = nome;
    document.getElementById('displaySeuDino').innerText = nome;
}

function escolhaAleatoria() {
    let numeroSorteado = Math.floor(Math.random() * 10); 
    dinoEscolhido = dinos[numeroSorteado];
    document.getElementById('displaySeuDino').innerText = dinoEscolhido;
}

// ------------------------------------------------------------------------------------------\\
function jogar() {
    let valorDaAposta = document.getElementById('valorAposta').value;
    
    if (dinoEscolhido == "") {
        alert("Escolha um dino primeiro!");
        return;
    }
    if (valorDaAposta == "" || valorDaAposta == 0) {
        alert("Coloque um valor para apostar!");
        return; 
    }
// ------------------------------------------------------------------------------------------\\
    let numeroSorteado = Math.floor(Math.random() * 10);
    let dinoVencedor = dinos[numeroSorteado];
    document.getElementById('displaySorteado').innerText = dinoVencedor;

    totalArrecadado = totalArrecadado + Number(valorDaAposta);

    let acertouOdinossauro = (dinoEscolhido == dinoVencedor);
    let premio = valorDaAposta * 2;
    let cassinoTemDinheiro = (totalArrecadado * 0.2 >= premio);
    
    if (acertouOdinossauro == true) {
        if (rodadaGratis == true) {
            alert("Você perdeu!");
            rodadaGratis = false;
        } 
        else if (cassinoTemDinheiro == false) {
            alert("Você perdeu!");
        } 
        else {
            totalPago = totalPago + premio;
            alert("Você ganhou R$ " + premio + "!");
            document.getElementById('btn50x').style.display = "block";
        }
    } else {
        alert("Você perdeu! O dino sorteado foi outro.");
    }
}

// ------------------------------------------------------------------------------------------\\
function acessarPainel() {
    let senhaDigitada = prompt("Digite a senha do chefe:");
    
    if (senhaDigitada == "6132") {
        let lucro = totalArrecadado - totalPago;
        alert("Chefe, nosso lucro é: R$ " + lucro);
    } else {
        rodadaGratis = true;
        alert("Senha errada! Mas parabéns, você ganhou uma rodada grátis!");
    }
}
// ------------------------------------------------------------------------------------------\\
function trapaça50x() {
    alert("O sistema travou. Tente novamente!");
    document.getElementById('btn50x').style.display = "none";
}