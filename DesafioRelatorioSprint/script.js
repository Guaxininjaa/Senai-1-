function rodarSprint() {
   
   
    let div = document.getElementById("resultado");
    let dias = Number(prompt("Quantos dias tem a Sprint?"));
    let totalConcluidas = 0;
    let totalIncompletas = 0;

    for (let i = 1; i <= dias; i++) {
        let concluidas = Number(prompt(i + ": quantas tarefas foram concluídas?"));
        let incompletas = Number(prompt(i + ": quantas tarefas ficaram incompletas?"));

        totalConcluidas += concluidas;
        totalIncompletas += incompletas;

        div.innerHTML += "<p>" + i + ": " + concluidas + " concluída(s) | " + incompletas + " incompleta(s)</p>";
    }

    div.innerHTML += "<h3>Relatório Final da Sprint</h3>";
    div.innerHTML += "<p>Total de tarefas concluídas: " + totalConcluidas + "</p>";
    div.innerHTML += "<p>Total de tarefas incompletas: " + totalIncompletas + "</p>";
}