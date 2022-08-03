var razao_encoiada = false;
$(document).ready(function () {
    $("#tela_leitura").load("/ICareCustomerInteractionUI/HistoryEvents/HistoryEventsData/?tab=3", exibir);
    function exibir() {
        setTimeout(function () {
            var nova_tabela = document.getElementById("tela_leitura").getElementsByClassName("gridBordLeft")[0].querySelectorAll('tr');
            var i = 0;
            while (i < nova_tabela.length) {
                var nova_tr = nova_tabela[i];
                var data_historico = nova_tr.cells[0].innerText;
                var razao = nova_tr.cells[7].innerText;
                var d_2 = moment().subtract(2, 'd').format('DD/MM/YYYY');
                var diferenca = moment(data_historico, "DD/MM/YYYY").diff(moment(d_2, "DD/MM/YYYY"));
                var diferenca_em_dias = moment.duration(diferenca).asDays();
                if (diferenca_em_dias >= 0 && diferenca_em_dias <= 2 && razao == "GPT URA: ENVIO DE COMANDO (NEWSUBSCRIBER)") {
                    document.getElementsByClassName("answButton")[0].click();
                    razao_encoiada = true;
                    break;
                }
                if (diferenca_em_dias >= 0 && diferenca_em_dias <= 2 && razao == "GPT URA: ENVIO DE COMANDO (ERROSOA - NEWSUBSCRIBER)") {
                    document.getElementsByClassName("answButton")[1].click();
                    razao_encoiada = true;
                    break;
                }
                i += 1
            }
            if (razao_encoiada === false) {
                document.getElementsByClassName("answButton")[2].click();
            }
        }, 7000);
    }
});
$.ajaxSetup({ cache: false });