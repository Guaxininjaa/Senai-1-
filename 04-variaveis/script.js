let cont = 0

function IncrementarContagem(){
cont = cont + 1
document.getElementById('p-contagem').innerHTML = cont
 
}





let global = 'Eu sou uma variavel global :/'
function funcao1() {
let local = 'Sou uma variavel local :D'
console.log(local);
console.log(global);
}
function funcao2(){
// console.log(local);
console.log(global);
}

// funcao1()
// funcao2()

