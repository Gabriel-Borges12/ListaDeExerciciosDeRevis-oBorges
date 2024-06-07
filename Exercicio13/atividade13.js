// GABRIEL CAMARGO DE SOUZA BORGES

function atualizarRelogio() {
    var relogio = document.getElementById("relogio");
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    horas = formatarTempo(horas);
    minutos = formatarTempo(minutos);
    segundos = formatarTempo(segundos);

    relogio.textContent = horas + ":" + minutos + ":" + segundos;

    setTimeout(atualizarRelogio, 1000);
}

function formatarTempo(tempo) {
    if (tempo < 10) {
        tempo = "0" + tempo;
    }
    return tempo;
}

atualizarRelogio();
