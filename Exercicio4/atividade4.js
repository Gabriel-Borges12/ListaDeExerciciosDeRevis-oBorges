// GABRIEL CAMARGO DE SOUZA BORGES
function adicionarLinha() {
    var tabela = document.getElementById("minhaTabela");
    var linha = tabela.insertRow(-1);
    var coluna1 = linha.insertCell(0);
    var coluna2 = linha.insertCell(1);
    coluna1.innerHTML = "Nova Dado 1";
    coluna2.innerHTML = "Nova Dado 2";
}
