// let i = 10;
// while (i >= 1) {
//     i--;
//     console.log(i);
   
// }
// --------------------------------------------------------------------


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// --------------------------------------------------------------------

// for (let i = 0; i <= 20; i+=2) {
//     console.log(i);
// }

// --------------------------------------------------------------------
function resetar() {
    document.getElementById("resultado1").innerHTML = "";
    document.getElementById("resultado2").innerHTML = "";
    document.getElementById("resultado3").innerHTML = "";
    document.getElementById("resultado4").innerHTML = "";
    document.getElementById("resultado5").innerHTML = "";
    document.getElementById("resultado6").innerHTML = "";
    document.getElementById("resultado7").innerHTML = "";
    document.getElementById("resultado8").innerHTML = "";   
    document.getElementById("resultado9").innerHTML = "";
    document.getElementById("resultado10").innerHTML = "";
    document.getElementById("resultado11").innerHTML = "";
    document.getElementById("resultado12").innerHTML = "";
    document.getElementById("resultado13").innerHTML = "";
    document.getElementById("resultado14").innerHTML = "";
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
        div.innerHTML += "<p>➡️5 × " + i + " = " + (5 * i) + "</p>";
    }
}
// --------------------------------------------------------------------
function exercicio3() {
    
}

// --------------------------------------------------------------------

function exercicio4() {
    let palavra = "JaVaScRiPt";
    let div = document.getElementById("resultado4");

    for (let i = 0; i < palavra.length; i++) {
        div.innerHTML += "<p>➡️" + palavra[i] + "</p>";
    }
}

function exercicio5() {
    let div = document.getElementById("resultado5");
     

    for (let i = 3; i <= 30; i += 3) {
        div.innerHTML += "<p>➡️" + i  + "</p>";
        
    }
}

// --------------------------------------------------------------------
