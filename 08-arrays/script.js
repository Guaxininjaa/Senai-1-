

const nomes = [
  "Lúcio Fernando",
  "Rivaldo Jesus",
  "Mônica",
  "Capitão Ganso",
  "Peba",
  "Gill Bates",
  "Dona Bete",
  "Kowalski",
  "Heitor Tuga",
  "Junin",
  "Padre Ernan Buco",
  "GENéZio",
  "Bilu",
  "Waldisney",
  "Tião"
];


let produtos = ["Meia", "Pá de corte","Machado", "leite"]
let precos = [2.50, 5.00, 19.90, 3.99]
function verProdutos() {
  
  for(let i = 0; i < produtos.length; i++){
    document.getElementById("listaProdutos").innerHTML += "<p>" + i + ":" + produtos[i] 
    + "  R$ " + precos[i].toFixed(2) + "</p>";
    }
  }

  