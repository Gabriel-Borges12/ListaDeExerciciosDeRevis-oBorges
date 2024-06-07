// GABRIEL CAMARGO DE SOUZA BORGES

function filtrar(categoria) {
    var imagens = document.getElementsByClassName("galeria")[0].children;

    if (categoria == "todos") {
        for (var i = 0; i < imagens.length; i++) {
            imagens[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < imagens.length; i++) {
            if (imagens[i].classList.contains(categoria)) {
                imagens[i].style.display = "block";
            } else {
                imagens[i].style.display = "none";
            }
        }
    }
}
