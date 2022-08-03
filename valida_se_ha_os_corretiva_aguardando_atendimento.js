// V3.210518
$(document).ready(function () {
    $("#div1").load("http://icareclientes.sky.com.br/ICareProblemManagementUI/ListingOS/ListingOS", exibir);
    function exibir() {
        var tabela = document.getElementById("divConteudo").querySelectorAll('.gridComBordaBranca table tbody tr');
        var cont = 0;
        var equipEncontrado = false;
        while (cont < tabela.length) {
            var tr = tabela[cont];
            if (tr.cells[2].innerText == "Corretiva" && tr.cells[4].innerText == "Aguard. Atendimento") {
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