// GABRIEL CAMARGO DE SOUZA BORGES

function animar() {
    var elemento = document.getElementById("elementoAnimado");
    if (elemento.classList.contains("animar")) {
        elemento.classList.remove("animar");
        void elemento.offsetWidth;
    }
    elemento.classList.add("animar");
}
