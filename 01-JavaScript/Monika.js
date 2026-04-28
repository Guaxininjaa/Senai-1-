let chance, n   

n = Number(prompt("Numero de vezes ao celular: "))
chance = (0.1/(1+500*n))*100

// alert ("Chance de aprovação: " + chance.toFixed(4) + "%")
console.log ("Aprovação: " + chance.toFixed(4) + "%")