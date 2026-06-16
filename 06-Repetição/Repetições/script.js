// let contador = 0; //inicialização
// while(contador < 10) {{         //condição repetição
//     alert("Contador: " + contador);
//     contador++; // contagem
//     // voltar e testar novamente a condição
   
// }}



// -----------------------------------------------------------------------------------------------------------------------------------------

// let peso = Number(prompt("Digite seu peso:"));
// if (peso > 1.1 || peso < 0.9) {
    
//     alert("Fora tolerancia! Peso: " + peso);
// }


// -----------------------------------------------------------------------------------------------------------------------------------------


let contador = 0; //inicialização
while(contador < 10) {         //condição repetição
    let peso = Number(prompt("Digite seu peso:"));
    if (peso > 1.1 || peso < 0.9) {
        alert("Fora tolerancia! Peso: " + peso);
    }
    contador++;
}