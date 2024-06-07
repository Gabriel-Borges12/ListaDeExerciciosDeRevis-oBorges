// GABRIEL CAMARGO DE SOUZA BORGES
document.addEventListener("DOMContentLoaded", function() {
    var checkoutForm = document.getElementById("checkoutForm");
    var mensagemP = document.getElementById("mensagem");

    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validarFormulario()) {
            mensagemP.textContent = "Pagamento realizado com sucesso!";
            limparFormulario();
        } else {
            mensagemP.textContent = "Por favor, preencha todos os campos corretamente.";
        }
    });

    function validarFormulario() {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var numeroCartao = document.getElementById("numero-cartao").value;
        var dataExpiracao = document.getElementById("data-expiracao").value;
        var codigoSeguranca = document.getElementById("codigo-seguranca").value;
        return nome !== "" && email !== "" && numeroCartao !== "" && dataExpiracao !== "" && codigoSeguranca !== "";
    }

    function limparFormulario() {
        var inputs = document.querySelectorAll("input");
        inputs.forEach(function(input) {
            input.value = "";
        });
    }
});
