// ============================================================
// FUNÇÕES DE APOIO
// ============================================================

function desenharArray(idDaDiv, array) {
    let div = document.getElementById(idDaDiv);
    div.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        div.innerHTML = div.innerHTML +
            "<div class='elemento'>" + array[i] +
            "<span class='indice'>índice " + i + "</span></div>";
    }

    if (array.length === 0) {
        div.innerHTML = "<p>Array vazio! 🦴</p>";
    }
}

function escrever(idDaDiv, texto) {
    document.getElementById(idDaDiv).innerHTML = texto;
}

// ============================================================
// LAB 1: PUSH E POP
// ============================================================
let arrayFinal = ["T-Rex", "Triceratops", "Velociraptor"];

function labPush() {
    let nome = document.getElementById("finalCampo").value;
    if (nome === "") {
        escrever("finalResultado", "⚠️ Digite um nome primeiro!");
        return;
    }
    let novoTamanho = arrayFinal.push(nome);
    escrever("finalResultado",
        "push('" + nome + "') → RETORNOU " + novoTamanho + " (o novo tamanho do array)");
    desenharArray("finalVisual", arrayFinal);
}

function labPop() {
    if (arrayFinal.length === 0) {
        escrever("finalResultado", "⚠️ Array vazio, nada pra remover!");
        return;
    }
    let removido = arrayFinal.pop();
    escrever("finalResultado",
        "pop() → RETORNOU '" + removido + "' (o elemento removido)");
    desenharArray("finalVisual", arrayFinal);
}

function resetarFinal() {
    arrayFinal = ["T-Rex", "Triceratops", "Velociraptor"];
    desenharArray("finalVisual", arrayFinal);
    escrever("finalResultado", "Resetado! 🔄");
}

// ============================================================
// LAB 2: UNSHIFT E SHIFT
// ============================================================
let arrayInicio = ["Stegosaurus", "Brachiosaurus", "Diplodocus"];

function labUnshift() {
    let nome = document.getElementById("inicioCampo").value;
    if (nome === "") {
        escrever("inicioResultado", "⚠️ Digite um nome primeiro!");
        return;
    }
    let novoTamanho = arrayInicio.unshift(nome);
    escrever("inicioResultado",
        "unshift('" + nome + "') → RETORNOU " + novoTamanho +
        " (novo tamanho). Todos os índices aumentaram! 👆");
    desenharArray("inicioVisual", arrayInicio);
}

function labShift() {
    if (arrayInicio.length === 0) {
        escrever("inicioResultado", "⚠️ Array vazio, nada pra remover!");
        return;
    }
    let removido = arrayInicio.shift();
    escrever("inicioResultado",
        "shift() → RETORNOU '" + removido +
        "' (o removido). Todos os índices diminuíram! 👇");
    desenharArray("inicioVisual", arrayInicio);
}

function resetarInicio() {
    arrayInicio = ["Stegosaurus", "Brachiosaurus", "Diplodocus"];
    desenharArray("inicioVisual", arrayInicio);
    escrever("inicioResultado", "Resetado! 🔄");
}

// ============================================================
// LAB 3: SPLICE
// ============================================================
let arraySplice = ["T-Rex", "Triceratops", "Velociraptor", "Stegosaurus", "Pteranodon"];

function labSplice() {
    let posicao = Number(document.getElementById("splicePosicao").value);
    let quantos = Number(document.getElementById("spliceQuantos").value);
    let novo = document.getElementById("spliceNovo").value;

    let removidos;

    if (novo === "") {
        removidos = arraySplice.splice(posicao, quantos);
        escrever("spliceResultado",
            "splice(" + posicao + ", " + quantos + ") → RETORNOU [" +
            removidos.join(", ") + "] (array com os removidos)");
    } else {
        removidos = arraySplice.splice(posicao, quantos, novo);
        escrever("spliceResultado",
            "splice(" + posicao + ", " + quantos + ", '" + novo + "') → RETORNOU [" +
            removidos.join(", ") + "] e inseriu '" + novo + "' na posição " + posicao);
    }

    desenharArray("spliceVisual", arraySplice);
}

function resetarSplice() {
    arraySplice = ["T-Rex", "Triceratops", "Velociraptor", "Stegosaurus", "Pteranodon"];
    desenharArray("spliceVisual", arraySplice);
    escrever("spliceResultado", "Dica: teste splice(1, 2) e depois splice(0, 1, 'Barney')");
}

// ============================================================
// LAB 4: SLICE
// ============================================================
let arraySlice = ["Allosaurus", "Brachiosaurus", "Diplodocus", "Spinosaurus", "Ankylosaurus"];

function labSlice() {
    let inicio = Number(document.getElementById("sliceInicio").value);
    let fim = Number(document.getElementById("sliceFim").value);

    let copia = arraySlice.slice(inicio, fim);

    desenharArray("sliceVisualCopia", copia);
    escrever("sliceResultado",
        "slice(" + inicio + ", " + fim + ") → RETORNOU uma cópia com " + copia.length +
        " elemento(s). O índice " + fim + " ficou DE FORA, e o original não mudou! 👆");
}

// ============================================================
// LAB 5: INDEXOF E INCLUDES
// ============================================================
let arrayBusca = ["T-Rex", "Triceratops", "Velociraptor", "Spinosaurus"];

function labIndexOf() {
    let nome = document.getElementById("buscaCampo").value;
    if (nome === "") {
        escrever("buscaResultado", "⚠️ Digite um nome pra procurar!");
        return;
    }
    let posicao = arrayBusca.indexOf(nome);
    if (posicao === -1) {
        escrever("buscaResultado",
            "indexOf('" + nome + "') → RETORNOU -1 (não existe no array). " +
            "Cuidado: a busca diferencia maiúsculas de minúsculas!");
    } else {
        escrever("buscaResultado",
            "indexOf('" + nome + "') → RETORNOU " + posicao + " (a posição dele)");
    }
}

function labIncludes() {
    let nome = document.getElementById("buscaCampo").value;
    if (nome === "") {
        escrever("buscaResultado", "⚠️ Digite um nome pra verificar!");
        return;
    }
    let existe = arrayBusca.includes(nome);
    escrever("buscaResultado", "includes('" + nome + "') → RETORNOU " + existe);
}

// ============================================================
// LAB 6: FOREACH
// ============================================================
let arrayForEach = ["T-Rex", "Velociraptor", "Pteranodon", "Diplodocus"];

function labForEachSimples() {
    let saida = "forEach visitou cada elemento:<br>";
    arrayForEach.forEach(function(dino, indice) {
        saida = saida + "→ índice " + indice + ": " + dino + "<br>";
    });
    saida = saida + "(repare: ele não criou array novo, só visitou cada um)";
    escrever("forEachResultado", saida);
}

function labForEachContar() {
    let saida = "forEach contando as letras:<br>";
    arrayForEach.forEach(function(dino) {
        saida = saida + "→ " + dino + " tem " + dino.length + " letras<br>";
    });
    escrever("forEachResultado", saida);
}

// ============================================================
// LAB 7: MAP
// ============================================================
let arrayMap = ["T-Rex", "Stegosaurus", "Velociraptor", "Pteranodon"];

function labMapMaiusculas() {
    let novo = arrayMap.map(function(dino) {
        return dino.toUpperCase();
    });
    desenharArray("mapVisualNovo", novo);
    escrever("mapResultado",
        "map() RETORNOU um array novo com tudo em maiúsculas. Original: " +
        arrayMap.length + " elementos → Novo: " + novo.length + " elementos. Mesmo tamanho sempre!");
}

function labMapMinusculas() {
    let novo = arrayMap.map(function(dino) {
        return dino.toLowerCase();
    });
    desenharArray("mapVisualNovo", novo);
    escrever("mapResultado", "map() transformou tudo em minúsculas.");
}

function labMapTamanhos() {
    let novo = arrayMap.map(function(dino) {
        return dino.length;
    });
    desenharArray("mapVisualNovo", novo);
    escrever("mapResultado",
        "map() transformou nomes em números! Cada elemento virou o nº de letras. 🔢");
}

function labMapEmoji() {
    let novo = arrayMap.map(function(dino) {
        return "🦖 " + dino;
    });
    desenharArray("mapVisualNovo", novo);
    escrever("mapResultado", "map() adicionou um emoji em cada elemento.");
}

// ============================================================
// LAB 8: FILTER
// ============================================================
let arrayFilter = ["T-Rex", "Stegosaurus", "Velociraptor", "Pteranodon", "Brachiosaurus", "Spinosaurus"];

function labFilterTexto() {
    let texto = document.getElementById("filterCampo").value;
    if (texto === "") {
        escrever("filterResultado", "⚠️ Digite um texto pra filtrar! Exemplo: saurus");
        return;
    }
    let novo = arrayFilter.filter(function(dino) {
        return dino.toLowerCase().includes(texto.toLowerCase());
    });
    desenharArray("filterVisualNovo", novo);
    escrever("filterResultado",
        "filter() RETORNOU um array novo: aprovou " + novo.length + " de " +
        arrayFilter.length + " elementos. Só passa quem retorna true!");
}

function labFilterGrandes() {
    let novo = arrayFilter.filter(function(dino) {
        return dino.length > 10;
    });
    desenharArray("filterVisualNovo", novo);
    escrever("filterResultado",
        "filter() aprovou os nomes com mais de 10 letras: " + novo.length + " elemento(s).");
}

// ============================================================
// LAB 9: REDUCE
// ============================================================
let notas = [8, 7.5, 9, 6.5];
let dinosReduce = ["T-Rex", "Triceratops", "Velociraptor"];

function labReduceSoma() {
    let soma = notas.reduce(function(total, nota) {
        return total + nota;
    }, 0);
    escrever("reduceResultado",
        "reduce() somou passo a passo: 0 + 8 = 8 → 8 + 7.5 = 15.5 → 15.5 + 9 = 24.5 → " +
        "24.5 + 6.5 = 31.<br>RETORNOU: " + soma + " (um único valor!)");
}

function labReduceMedia() {
    let soma = notas.reduce(function(total, nota) {
        return total + nota;
    }, 0);
    let media = soma / notas.length;
    escrever("reduceResultado",
        "Soma pelo reduce(): " + soma + " → dividido por " + notas.length +
        " notas → MÉDIA: " + media + " ✅ Aprovado!");
}

function labReduceLetras() {
    let total = dinosReduce.reduce(function(acumulado, dino) {
        return acumulado + dino.length;
    }, 0);
    escrever("reduceResultado",
        "reduce() nos nomes [" + dinosReduce.join(", ") + "]:<br>" +
        "T-Rex (5) + Triceratops (11) + Velociraptor (12) = RETORNOU " + total + " letras no total");
}

// ============================================================
// LAB 10: SORT E REVERSE
// ============================================================
let arrayNomes = ["Velociraptor", "Allosaurus", "T-Rex", "Diplodocus"];
let arrayNumeros = [40, 100, 1, 5, 25, 10];

function labSortNomes() {
    arrayNomes.sort();
    desenharArray("ordemVisualNomes", arrayNomes);
    escrever("ordemResultado", "sort() ordenou os nomes de A a Z. Ele MODIFICA o array original!");
}

function labReverseNomes() {
    arrayNomes.reverse();
    desenharArray("ordemVisualNomes", arrayNomes);
    escrever("ordemResultado", "reverse() inverteu a ordem. Também modifica o original!");
}

function resetarOrdem() {
    arrayNomes = ["Velociraptor", "Allosaurus", "T-Rex", "Diplodocus"];
    desenharArray("ordemVisualNomes", arrayNomes);
    escrever("ordemResultado", "Nomes resetados! 🔄");
}

function labSortNumerosErrado() {
    arrayNumeros.sort();
    desenharArray("ordemVisualNumeros", arrayNumeros);
    escrever("ordemResultado",
        "😱 PEGADINHA! sort() sem função compara como TEXTO: '100' vem antes de '25' " +
        "porque '1' vem antes de '2' no alfabeto. Pra números, use o botão correto! 👉");
}

function labSortNumerosCerto() {
    arrayNumeros.sort(function(a, b) {
        return a - b;
    });
    desenharArray("ordemVisualNumeros", arrayNumeros);
    escrever("ordemResultado",
        "✅ Agora sim! sort(function(a, b) { return a - b; }) compara como NÚMEROS " +
        "e ordena do menor pro maior.");
}

function resetarNumeros() {
    arrayNumeros = [40, 100, 1, 5, 25, 10];
    desenharArray("ordemVisualNumeros", arrayNumeros);
    escrever("ordemResultado", "Números resetados! 🔄");
}

// ============================================================
// LAB 11: QUIZ (14 perguntas, uma por método)
// ============================================================
let perguntas = [
    { texto: "Adicionar um item no FINAL do array.", opcoes: ["push()", "pop()", "shift()", "unshift()"], correta: "push()" },
    { texto: "Remover o ÚLTIMO item do array.", opcoes: ["pop()", "shift()", "reverse()", "slice()"], correta: "pop()" },
    { texto: "Remover o PRIMEIRO item do array.", opcoes: ["pop()", "shift()", "splice()", "slice()"], correta: "shift()" },
    { texto: "Adicionar um item no INÍCIO do array.", opcoes: ["push()", "shift()", "unshift()", "splice()"], correta: "unshift()" },
    { texto: "Remover um item DO MEIO do array (posição 2).", opcoes: ["pop()", "slice()", "splice()", "shift()"], correta: "splice()" },
    { texto: "COPIAR um pedaço do array SEM alterar o original.", opcoes: ["splice()", "slice()", "filter()", "pop()"], correta: "slice()" },
    { texto: "Saber EM QUAL POSIÇÃO um item está.", opcoes: ["includes()", "indexOf()", "sort()", "slice()"], correta: "indexOf()" },
    { texto: "Saber SE um item existe (true ou false).", opcoes: ["indexOf()", "filter()", "includes()", "map()"], correta: "includes()" },
    { texto: "Executar um console.log para CADA elemento, sem criar array novo.", opcoes: ["map()", "forEach()", "filter()", "reduce()"], correta: "forEach()" },
    { texto: "Criar um array NOVO transformando cada elemento (ex: tudo maiúsculo).", opcoes: ["forEach()", "filter()", "map()", "sort()"], correta: "map()" },
    { texto: "Criar um array NOVO só com os elementos que passam num teste.", opcoes: ["map()", "reduce()", "slice()", "filter()"], correta: "filter()" },
    { texto: "Somar todos os números do array e obter UM único valor.", opcoes: ["map()", "reduce()", "forEach()", "sort()"], correta: "reduce()" },
    { texto: "Colocar os elementos em ORDEM ALFABÉTICA.", opcoes: ["reverse()", "map()", "sort()", "reduce()"], correta: "sort()" },
    { texto: "INVERTER a ordem dos elementos.", opcoes: ["sort()", "reverse()", "map()", "splice()"], correta: "reverse()" }
];

let perguntaAtual = 0;
let acertos = 0;

function mostrarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        escrever("quizPergunta", "🏆 Fim do quiz!");
        escrever("quizOpcoes", "<button onclick='reiniciarQuiz()'>Jogar de novo 🔄</button>");
        escrever("quizResultado", "Você acertou " + acertos + " de " + perguntas.length + "!");
        return;
    }

    let p = perguntas[perguntaAtual];
    escrever("quizPergunta", "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length + ": " + p.texto);

    let botoes = "";
    for (let i = 0; i < p.opcoes.length; i++) {
        botoes = botoes + "<button onclick=\"responder('" + p.opcoes[i] + "')\">" + p.opcoes[i] + "</button>";
    }
    escrever("quizOpcoes", botoes);
}

function responder(escolha) {
    let p = perguntas[perguntaAtual];

    if (escolha === p.correta) {
        acertos++;
        escrever("quizResultado", "✅ Acertou! " + p.correta + " era a resposta certa.");
    } else {
        escrever("quizResultado", "❌ Errou! Você escolheu " + escolha + ", mas o certo era " + p.correta + ".");
    }

    perguntaAtual++;
    escrever("quizPlacar", "Placar: " + acertos + " acerto(s)");
    mostrarPergunta();
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    escrever("quizResultado", "");
    escrever("quizPlacar", "");
    mostrarPergunta();
}

// ============================================================
// LAB 12: DESAFIO
// ============================================================
let niveis = [
    {
        inicio: ["Triceratops", "Velociraptor"],
        alvo: ["T-Rex", "Triceratops", "Velociraptor"],
        pecas: ["T-Rex", "Barney"]
    },
    {
        inicio: ["Stegosaurus", "T-Rex", "Barney"],
        alvo: ["T-Rex", "Stegosaurus"],
        pecas: ["Pteranodon"]
    },
    {
        inicio: ["Velociraptor", "Pteranodon"],
        alvo: ["Allosaurus", "Pteranodon", "Velociraptor", "Spinosaurus"],
        pecas: ["Allosaurus", "Spinosaurus", "Barney"]
    },
    {
        inicio: ["T-Rex", "Allosaurus", "Spinosaurus", "Diplodocus"],
        alvo: ["Allosaurus", "Diplodocus", "Spinosaurus", "T-Rex"],
        pecas: ["Barney"]
    }
];

let nivelAtual = 0;
let arrayDesafio = [];
let jogadas = 0;

function carregarNivel() {
    if (nivelAtual >= niveis.length) {
        escrever("desafioResultado", "🏆🦖 PARABÉNS! Você zerou todos os níveis!");
        escrever("desafioAlvo", "");
        escrever("desafioAtual", "");
        return;
    }

    let nivel = niveis[nivelAtual];
    arrayDesafio = nivel.inicio.slice();
    jogadas = 0;

    desenharArray("desafioAlvo", nivel.alvo);
    desenharArray("desafioAtual", arrayDesafio);

    let select = document.getElementById("desafioPeca");
    select.innerHTML = "";
    for (let i = 0; i < nivel.pecas.length; i++) {
        select.innerHTML = select.innerHTML +
            "<option value='" + nivel.pecas[i] + "'>" + nivel.pecas[i] + "</option>";
    }

    escrever("desafioResultado", "Nível " + (nivelAtual + 1) + " de " + niveis.length + ". Boa sorte! 🍀");
}

function verificarVitoria() {
    let nivel = niveis[nivelAtual];
    desenharArray("desafioAtual", arrayDesafio);

    if (arrayDesafio.join(",") === nivel.alvo.join(",")) {
        escrever("desafioResultado", "🎉 NÍVEL COMPLETO em " + jogadas + " jogada(s)! Carregando o próximo...");
        nivelAtual++;
        setTimeout(carregarNivel, 2000);
    } else {
        escrever("desafioResultado", "Jogadas: " + jogadas + ". Continue tentando! 💪");
    }
}

function desafioPush() {
    arrayDesafio.push(document.getElementById("desafioPeca").value);
    jogadas++;
    verificarVitoria();
}

function desafioUnshift() {
    arrayDesafio.unshift(document.getElementById("desafioPeca").value);
    jogadas++;
    verificarVitoria();
}

function desafioPop() {
    arrayDesafio.pop();
    jogadas++;
    verificarVitoria();
}

function desafioShift() {
    arrayDesafio.shift();
    jogadas++;
    verificarVitoria();
}

function desafioReverse() {
    arrayDesafio.reverse();
    jogadas++;
    verificarVitoria();
}

function desafioSort() {
    arrayDesafio.sort();
    jogadas++;
    verificarVitoria();
}

function reiniciarNivel() {
    carregarNivel();
}

// ============================================================
// INICIAR TUDO
// ============================================================
desenharArray("finalVisual", arrayFinal);
escrever("finalResultado", "Teste o push() e o pop() e repare no que cada um RETORNA. 👆");

desenharArray("inicioVisual", arrayInicio);
escrever("inicioResultado", "Teste o unshift() e o shift() e repare nos índices mudando!");

desenharArray("spliceVisual", arraySplice);
escrever("spliceResultado", "Dica: teste splice(1, 2) e depois splice(0, 1, 'Barney')");

desenharArray("sliceVisualOriginal", arraySlice);
escrever("sliceResultado", "Dica: teste slice(1, 4) e repare qual elemento fica de fora.");

desenharArray("buscaVisual", arrayBusca);
escrever("buscaResultado", "Procure por 'T-Rex' e depois por 'Barney'. 🔍");

desenharArray("forEachVisual", arrayForEach);
escrever("forEachResultado", "Clique num botão pra ver o forEach visitando cada elemento.");

desenharArray("mapVisualOriginal", arrayMap);
escrever("mapResultado", "Clique num botão e compare o array novo com o original!");

desenharArray("filterVisualOriginal", arrayFilter);
escrever("filterResultado", "Digite 'saurus' no campo e clique em filtrar!");

desenharArray("reduceVisualNotas", notas);
escrever("reduceResultado", "Clique num botão pra ver o reduce() transformar tudo em UM valor.");

desenharArray("ordemVisualNomes", arrayNomes);
desenharArray("ordemVisualNumeros", arrayNumeros);
escrever("ordemResultado", "Teste o sort() nos números primeiro... vai por mim. 😏");

mostrarPergunta();
carregarNivel();