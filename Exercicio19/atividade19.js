// GABRIEL CAMARGO DE SOUZA BORGES
document.addEventListener("DOMContentLoaded", function() {
    var fileInput = document.getElementById("fileInput");
    var filePreview = document.getElementById("filePreview");

    fileInput.addEventListener("change", function() {
        exibirPreviewArquivos(this.files);
    });

    var uploadForm = document.getElementById("uploadForm");
    uploadForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        // Aqui você pode enviar os dados do formulário para o servidor usando AJAX
        // Exemplo: enviarFormData(formData);
    });

    function exibirPreviewArquivos(arquivos) {
        filePreview.innerHTML = "";
        for (var i = 0; i < arquivos.length; i++) {
            var arquivo = arquivos[i];
            var tipoArquivo = arquivo.type.startsWith("image/") ? "imagem" : "arquivo";
            var tamanhoArquivo = formatarTamanhoArquivo(arquivo.size);
            var nomeArquivo = escapeHTML(arquivo.name);
            var preview = document.createElement("div");
            preview.textContent = nomeArquivo + " (" + tipoArquivo + ", " + tamanhoArquivo + ")";
            filePreview.appendChild(preview);
        }
    }

    function formatarTamanhoArquivo(tamanho) {
        if (tamanho === 0) return "0 Bytes";
        var unidades = ["Bytes", "KB", "MB", "GB", "TB"];
        var i = Math.floor(Math.log(tamanho) / Math.log(1024));
        return parseFloat((tamanho / Math.pow(1024, i)).toFixed(2)) + " " + unidades[i];
    }

    function escapeHTML(texto) {
        var map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return texto.replace(/[&<>"']/g, function(m) { return map[m]; });
    }

    function enviarFormData(formData) {
        // Implemente aqui a lógica para enviar o formulário para o servidor
    }
});
