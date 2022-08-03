$(document).ready(function () {
    $("#carrega_tela").load("http://icareclientes.sky.com.br/ICareProblemManagementUI/ListingOS/ListingOS", validar);
    function validar() {
        var tabela = document.getElementById("divConteudo").querySelectorAll('.gridComBordaBranca table tbody tr');
        var cont = 0;
        var equipEncontrado = false;
        while (cont < tabela.length) {
            var tr = tabela[cont];
            if (tr.cells[3].innerText == "AT Antena Adicional" && tr.cells[4].innerText == "Aguard. Atendimento") {
                document.getElementsByClassName("answButton")[0].click();
                equipEncontrado = true;
                break;
            }
            cont += 1;
        }
        if (equipEncontrado === false) {
            document.getElementsByClassName("answButton")[1].click();
        }
    }
});
$.ajaxSetup({ cache: false });