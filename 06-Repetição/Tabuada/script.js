function gerarTabuada() {
  let numero = parseInt(document.getElementById("numero").value)
  let linhasDiv = document.getElementById("linhas")

  linhasDiv.innerHTML = ""

  let contador = 1

  while (contador <= 10) {
    let produto = numero * contador

    linhasDiv.innerHTML = linhasDiv.innerHTML + "<p>" + numero + " x " + contador + " = " + produto + "</p>"

    contador++
  }
}