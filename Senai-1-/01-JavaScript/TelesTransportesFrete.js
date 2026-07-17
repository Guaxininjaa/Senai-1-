let peso, distancia, volume, frete

peso = Number(prompt("Digite o Peso:"))
distancia = Number(prompt("Digite o distancia: "))
volume = Number(prompt("Digite o Volume: "))


frete=15+(2* peso)+(0.05*distancia)+(10*volume)

// alert("Valor do Frete: R$ " + frete.toFixed(2) )
console.log("Valor do Frete: R$" + frete.toFixed(2))

