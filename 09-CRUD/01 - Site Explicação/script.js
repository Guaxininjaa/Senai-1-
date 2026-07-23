// ===== ARRAY DO PLAYGROUND =====
let dinossauros = ["T-Rex", "Triceratops", "Velociraptor", "Stegosaurus"];

// ===== MOSTRAR O ARRAY NA TELA =====
function mostrarArray() {
    let visual = document.getElementById("arrayVisual");
    visual.innerHTML = "";

    for (let i = 0; i < dinossauros.length; i++) {
        visual.innerHTML = visual.innerHTML +
            "<div class='elemento'>" + dinossauros[i] +
            "<span class='indice'>índice " + i + "</span></div>";
    }

    if (dinossauros.length === 0) {
        visual.innerHTML = "<p>Array vazio! 🦴 Adicione um dinossauro.</p>";
    }
}

// ===== MOSTRAR RESULTADO =====
function mostrarResultado(texto) {
    document.getElementById("resultado").innerHTML = texto;
}

// ===== PEGAR O TEXTO DO CAMPO =====
function pegarCampo() {
    return document.getElementById("campoDino").value;
}

// ===== MÉTODOS =====
function fazerPush() {
    let nome = pegarCampo();
    if (nome === "") {
        mostrarResultado("⚠️ Digite um nome no campo primeiro!");
        return;
    }
    dinossauros.push(nome);
    mostrarResultado("push('" + nome + "') → adicionado no FINAL. O array agora tem " + dinossauros.length + " elementos.");
    mostrarArray();
}

function fazerUnshift() {
    let nome = pegarCampo();
    if (nome === "") {
        mostrarResultado("⚠️ Digite um nome no campo primeiro!");
        return;
    }
    dinossauros.unshift(nome);
    mostrarResultado("unshift('" + nome + "') → adicionado no INÍCIO. Repare que os índices mudaram!");
    mostrarArray();
}

function fazerPop() {
    if (dinossauros.length === 0) {
        mostrarResultado("⚠️ O array está vazio, não tem o que remover!");
        return;
    }
    let removido = dinossauros.pop();
    mostrarResultado("pop() → removeu e retornou: '" + removido + "'");
    mostrarArray();
}

function fazerShift() {
    if (dinossauros.length === 0) {
        mostrarResultado("⚠️ O array está vazio, não tem o que remover!");
        return;
    }
    let removido = dinossauros.shift();
    mostrarResultado("shift() → removeu e retornou: '" + removido + "'");
    mostrarArray();
}

function fazerIndexOf() {
    let nome = pegarCampo();
    if (nome === "") {
        mostrarResultado("⚠️ Digite um nome para procurar!");
        return;
    }
    let posicao = dinossauros.indexOf(nome);
    if (posicao === -1) {
        mostrarResultado("indexOf('" + nome + "') → retornou -1 (não existe no array)");
    } else {
        mostrarResultado("indexOf('" + nome + "') → retornou " + posicao + " (está nessa posição)");
    }
}

function fazerIncludes() {
    let nome = pegarCampo();
    if (nome === "") {
        mostrarResultado("⚠️ Digite um nome para verificar!");
        return;
    }
    let existe = dinossauros.includes(nome);
    mostrarResultado("includes('" + nome + "') → retornou " + existe);
}

function fazerSort() {
    dinossauros.sort();
    mostrarResultado("sort() → array ordenado de A a Z");
    mostrarArray();
}

function fazerReverse() {
    dinossauros.reverse();
    mostrarResultado("reverse() → ordem invertida!");
    mostrarArray();
}

function resetar() {
    dinossauros = ["T-Rex", "Triceratops", "Velociraptor", "Stegosaurus"];
    mostrarResultado("Array resetado ao estado original. 🔄");
    mostrarArray();
}

// ===== INICIAR =====
mostrarArray();
mostrarResultado("Clique em um botão para testar um método! 👆");