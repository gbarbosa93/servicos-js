var garantia = false;
$(document).ready(function () {
    $("#tela_leitura").load("/ICareProblemManagementUI/ListingOS/ListingOS", validar);
    function validar() {
        var tabela = document.getElementById("divConteudo").querySelectorAll('tbody tr');
        var cont = 0;
        setTimeout(function () {
            while (cont < tabela.length) {
                var tr = tabela[cont];
                var dataHistorico = tr.cells[3].innerText;
                var dataAgendamento = dataHistorico.split('-')[0].trim();
                var last90Days = moment().subtract(90, 'd').format('DD/MM/YYYY');
                var diff = moment(dataAgendamento, "DD/MM/YYYY").diff(moment(last90Days, "DD/MM/YYYY"));
                var diffDays = moment.duration(diff).asDays();
                var statusOs = tr.cells[6].innerText;
                if (diffDays >= 0 && diffDays <= 90 && statusOs == "Executada" || diffDays >= 0 && diffDays <= 90 && statusOs == "Finalizada") {
                    document.getElementsByClassName("answButton")[0].click();
                    garantia = true;
                    break;
                }
                cont += 2;
            }
            if (garantia === false) {
                document.getElementsByClassName("answButton")[1].click();
            }
        }, 4000);
    }
});
$.ajaxSetup({ cache: false });

/* Mesma validação de uma forma um pouco diferente (compara direto com data atual)
var garantia = false;
$(document).ready(function () {
    $("#tela_leitura").load("/ICareProblemManagementUI/ListingOS/ListingOS", validar);
    function validar() {
        var tabela = document.getElementById("divConteudo").querySelectorAll('tbody tr');
        var cont = 0;
        setTimeout(function () {
            while (cont < tabela.length) {
                var tr = tabela[cont];
                var dataAtual = moment().format("DD/MM/YYYY");
                var dataHistorico = tr.cells[3].innerText;
                var dataAgendamento = dataHistorico.split('-')[0].trim();
                var diff = moment(dataAtual, "DD/MM/YYYY").diff(moment(dataAgendamento, "DD/MM/YYYY"));
                var diffDays = moment.duration(diff).asDays();
                var statusOs = tr.cells[6].innerText;
                if (diffDays >= 0 && diffDays <= 90 && statusOs == "Executada" || diffDays >= 0 && diffDays <= 90 && statusOs == "Finalizada") {
                    document.getElementsByClassName("answButton")[0].click();
                    garantia = true;
                    break;
                }
                cont += 2;
            }
            if (garantia === false) {
                document.getElementsByClassName("answButton")[1].click();
            }
        }, 4000);
    }
});
$.ajaxSetup({ cache: false });
*/