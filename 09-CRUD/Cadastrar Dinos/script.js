const dinos = []

function cadastrarDino() {
    const novoDino = {
        id: 0,
     nome: document.getElementById("input-nome").value,
     altura: Number(document.getElementById("input-altura").value),
     cor: document.getElementById("input-cor").value,   
     custo: Number(document.getElementById("input-custo").value),
    }
    
    dinos.push(novoDino)
    console.log(dinos)
}
    
function testar(){
    
    const novoDino = {
    nome: "Testessauro",
    altura: 3,
    cor: "marrom sei la",
    custo: 14

}
    dinos.push(novoDino)
    console.log(dinos)

}
function limparDino() {
    document.getElementById("input-nome").value = ""
    document.getElementById("input-altura").value = ""
    document.getElementById("input-cor").value = ""
    document.getElementById("input-custo").value = ""
}