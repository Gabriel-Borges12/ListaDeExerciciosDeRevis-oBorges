// GABRIEL CAMARGO DE SOUZA BORGES

document.getElementById("campoTexto").addEventListener("input", function() {
    var texto = this.value;
    var palavras = texto.split(/\s+/).filter(function(palavra) {
        return palavra.length > 0;
    }).length;
    document.getElementById("contador").textContent = palavras;
});
