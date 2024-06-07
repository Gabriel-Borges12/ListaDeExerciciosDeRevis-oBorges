// GABRIEL CAMARGO DE SOUZA BORGES
document.addEventListener("DOMContentLoaded", function() {
    carregarTarefas();
});

function adicionarTarefa() {
    var input = document.getElementById("novaTarefa");
    var tarefa = input.value.trim();
    if (tarefa !== "") {
        adicionarTarefaNaLista(tarefa);
        salvarTarefasNoLocalStorage();
        input.value = "";
    }
}

function adicionarTarefaNaLista(tarefa) {
    var ul = document.getElementById("listaTarefas");
    var li = document.createElement("li");
    li.textContent = tarefa;
    ul.appendChild(li);
    adicionarBotoes(li);
}

function adicionarBotoes(li) {
    var btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.classList.add("concluir");
    btnConcluir.onclick = function() {
        alert("Tarefa concluída: " + li.textContent);
        li.classList.toggle("completed");
        salvarTarefasNoLocalStorage();
    };
    li.appendChild(btnConcluir);

    var btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remover");
    btnRemover.onclick = function() {
        li.remove();
        salvarTarefasNoLocalStorage();
    };
    li.appendChild(btnRemover);
}

function concluirOuRemover(event) {
    var elementoClicado = event.target;
    if (elementoClicado.tagName === "BUTTON") {
        var li = elementoClicado.parentElement;
        if (elementoClicado.classList.contains("concluir")) {
            alert("Tarefa concluída");
            li.classList.toggle("completed");
            salvarTarefasNoLocalStorage();
        } else if (elementoClicado.classList.contains("remover")) {
            li.remove();
            salvarTarefasNoLocalStorage();
        }
    }
}

function carregarTarefas() {
    var tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
        tarefas = JSON.parse(tarefas);
        tarefas.forEach(function(tarefa) {
            adicionarTarefaNaLista(tarefa);
        });
    }
}

function salvarTarefasNoLocalStorage() {
    var liTarefas = document.querySelectorAll("#listaTarefas li");
    var tarefas = [];
    liTarefas.forEach(function(li) {
        tarefas.push(li.textContent);
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
