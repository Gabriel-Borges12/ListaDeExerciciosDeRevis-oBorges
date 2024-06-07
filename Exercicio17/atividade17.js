// GABRIEL CAMARGO DE SOUZA BORGES
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var usernameInput = document.getElementById("username");
        var passwordInput = document.getElementById("password");
        var username = usernameInput.value;
        var password = passwordInput.value;
        if (validarLogin(username, password)) {
            loginSucesso(username);
        } else {
            exibirMensagemErro("Usuário ou senha incorretos.");
        }
    });
    
    verificarLoginAnterior();
});

function validarLogin(username, password) {
    // Aqui você pode implementar a lógica de validação do usuário e senha
    // Por exemplo, comparando com valores hardcoded ou consultando um banco de dados
    return username === "admin" && password === "1234";
}

function loginSucesso(username) {
    localStorage.setItem("loggedInUser", username);
    alert("Login bem-sucedido! Bem-vindo, " + username + "!");
    window.location.href = "dashboard.html"; // Redirecionar para a página de dashboard após o login
}

function exibirMensagemErro(mensagem) {
    var loginStatus = document.getElementById("loginStatus");
    loginStatus.textContent = mensagem;
    loginStatus.style.color = "red";
}

function verificarLoginAnterior() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "./atividade17.html"; // Redirecionar para a página de dashboard se já estiver logado
    }
}
