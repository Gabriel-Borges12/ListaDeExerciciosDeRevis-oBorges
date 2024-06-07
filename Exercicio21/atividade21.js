// GABRIEL CAMARGO DE SOUZA BORGES
document.addEventListener("DOMContentLoaded", function() {
    var calendarDiv = document.getElementById("calendar");
    var horaInput = document.getElementById("hora");
    var reservarBtn = document.getElementById("reservarBtn");
    var mensagemP = document.getElementById("mensagem");

    // Função para formatar a data no formato 'dd/mm/aaaa'
    function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
    }

    // Criar o calendário
    var today = new Date();
    var calendarHTML = '<input type="date" id="calendarDate" value="' + formatDate(today) + '">';
    calendarDiv.innerHTML = calendarHTML;

    // Manipular a reserva ao clicar no botão "Reservar"
    reservarBtn.addEventListener("click", function() {
        var selectedDate = document.getElementById("calendarDate").value;
        var selectedTime = horaInput.value;
        if (selectedDate && selectedTime) {
            mensagemP.textContent = "Reserva feita para " + selectedDate + " às " + selectedTime;
        } else {
            mensagemP.textContent = "Por favor, selecione uma data e hora antes de fazer a reserva.";
        }
    });
});
