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

   
 function multiplo3e10() {
    let soma = 0;
    let div = document.getElementById("resultado1");
    div.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        soma += i;
        div.innerHTML += "<p>" + soma + "</p>";
    }

    div.innerHTML += "<p>Total: " + soma + "</p>";
}

function somaMultiplos3() {
    let soma = 0;
    let div = document.getElementById("resultado2");
    div.innerHTML
}   
 
