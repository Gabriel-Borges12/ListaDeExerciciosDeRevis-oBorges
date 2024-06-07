// <!-- GABRIEL CAMARGO DE SOUZA BORGES -->

function destacarItem(item) {

    var itens = document.querySelectorAll('li');
    itens.forEach(function(element) {
        element.classList.remove('destacado');
    });
    

    item.classList.add('destacado');
}
