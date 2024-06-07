// GABRIEL CAMARGO DE SOUZA BORGES
function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return false;
    }

    return true;
}
