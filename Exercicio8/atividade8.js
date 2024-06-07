// GABRIEL CAMARGO DE SOUZA BORGES

var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function avançar(n) {
    mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function automatico() {
    avançar(1);
    setTimeout(automatico, 3000);
}

mostrarSlides(slideIndex);
automatico();
