// GABRIEL CAMARGO DE SOUZA BORGES
document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById("audioPlayer");
    var playBtn = document.getElementById("playBtn");
    var pauseBtn = document.getElementById("pauseBtn");
    var stopBtn = document.getElementById("stopBtn");

    playBtn.addEventListener("click", function() {
        audioPlayer.play();
    });

    pauseBtn.addEventListener("click", function() {
        audioPlayer.pause();
    });

    stopBtn.addEventListener("click", function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
});
