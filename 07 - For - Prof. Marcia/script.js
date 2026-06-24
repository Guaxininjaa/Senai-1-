function resetar() {
    for (let i = 1; i <= 14; i++) {
        document.getElementById("resultado" + i).innerHTML = "";
    }
}

// --------------------------------------------------------------------

function exercicio1() {
    let soma = 0;
    let div = document.getElementById("resultado1");

    for (let i = 1; i <= 10; i++) {
        soma += i;
        div.innerHTML += "<p>➡️ soma: " + soma + "</p>";
    }
    div.innerHTML += "<p>Total: " + soma + "</p>";
}

// --------------------------------------------------------------------

function exercicio2() {
    let div = document.getElementById("resultado2");

    for (let i = 1; i <= 10; i++) {
        div.innerHTML += "<p>➡️ 5 × " + i + " = " + (5 * i) + "</p>";
    }
}

// --------------------------------------------------------------------

function exercicio3() {
    let div = document.getElementById("resultado3");

    for (let i = 1; i <= 10; i++) {
        div.innerHTML += "<p>➡️ " + i + " × " + i + " = " + (i * i) + "</p>";
    }
}

// --------------------------------------------------------------------

function exercicio4() {
    let palavra = "JavaScript";
    let div = document.getElementById("resultado4");

    for (let i = 0; i < palavra.length; i++) {
        div.innerHTML += "<p>➡️ " + palavra[i] + "</p>";
    }
}

// --------------------------------------------------------------------

function exercicio5() {
    let div = document.getElementById("resultado5");

    for (let i = 3; i <= 30; i += 3) {
        div.innerHTML += "<p>➡️ " + i + "</p>";
    }
}

// --------------------------------------------------------------------

function exercicio6() {
    let div = document.getElementById("resultado6");
    let linha = "";

    for (let i = 1; i <= 10; i++) {
        linha += "* ";
    }
    div.innerHTML = "<p>" + linha + "</p>";
}

// --------------------------FEITO COM AJUDA DA I.A-------------------

function exercicio7() {
    let soma = 0;
    let div = document.getElementById("resultado7");

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            soma += i;
            div.innerHTML += "<p>➡️ " + i + " é par → soma: " + soma + "</p>";
        }
    }
    div.innerHTML += "<p>Total: " + soma + "</p>";
}

// --------------------------------------------------------------------

function exercicio8() {
    let div = document.getElementById("resultado8");

    for (let i = 0; i <= 50; i += 5) {
        div.innerHTML += "<p>➡️ " + i + "</p>";
    }
}

// --------------------------------------------------------------------

function exercicio9() {
    let div = document.getElementById("resultado9");

    for (let i = 1; i <= 8; i++) {
        div.innerHTML += "<p>➡️ Olá!</p>";
    }
}

// --------------------------------------------------------------------

function exercicio10() {
    let soma = 0;
    let div = document.getElementById("resultado10");

    for (let i = 1; i <= 15; i += 2) {
        soma += i;
        div.innerHTML += "<p>➡️ " + i + " é ímpar → soma: " + soma + "</p>";
    }
    div.innerHTML += "<p>Total: " + soma + "</p>";
}

// --------------------------FEITO COM AJUDA DA I.A-------------------

function exercicio11() {
    let soma = 0;
    let div = document.getElementById("resultado11");
    let i = 1;

    while (i <= 15) {
        if (i % 2 !== 0) {
            soma += i;
            div.innerHTML += "<p>➡️ " + i + " é ímpar → soma: " + soma + "</p>";
        }
        i++;
    }
    div.innerHTML += "<p>Total: " + soma + "</p>";
}

// --------------------------------------------------------------------

function exercicio12() {
    let div = document.getElementById("resultado12");
    let sequencia = "";

    for (let i = 1; i <= 5; i++) {
        sequencia += i;
        div.innerHTML += "<p>➡️ " + sequencia + "</p>";
    }
}

// --------------------------------------------------------------------

function exercicio13() {
    let fatorial = 1;
    let div = document.getElementById("resultado13");

    for (let i = 1; i <= 5; i++) {
        fatorial = fatorial * i;
        div.innerHTML += "<p>➡️ " + i + "! = " + fatorial + "</p>";
    }
    div.innerHTML += "<p>Fatorial de 5 = " + fatorial + "</p>";
}

// --------------------------FEITO COM AJUDA DA I.A--------------------------

function exercicio14() {
    let palavra = "programacao";
    let contador = 0;
    let div = document.getElementById("resultado14");

    div.innerHTML += "<p>Palavra: " + palavra + "</p>";

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === "o") {
            contador++;
            div.innerHTML += "<p>➡️ posição " + i + " → encontrei um 'o'! Total: " + contador + "</p>";
        }
    }
    div.innerHTML += "<p>Total de 'o': " + contador + "</p>";
}



