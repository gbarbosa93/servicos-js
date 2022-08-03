var registroEncontrado = false;
$(document).ready(function () {
    $("#tela_leitura").load("http://icareclientes.sky.com.br/ICareCustomerInteractionUI/HistoryEvents/HistoryEventsData/?tab=3", exibir);
    function exibir() {
        setTimeout(function () {
            var nova_tabela = document.getElementById("tela_leitura").getElementsByClassName("gridBordLeft")[0].querySelectorAll('tr');
            var i = 0;
            while (i < nova_tabela.length) {
                var nova_tr = nova_tabela[i];
                var data_historico = nova_tr.cells[0].innerText;
                var razao = nova_tr.cells[6].innerText;
                var login = nova_tr.cells[7].innerText;
                var d_7 = moment().subtract(7,'d').format('DD/MM/YYYY');
                var diferenca = moment(data_historico, "DD/MM/YYYY").diff(moment(d_7, "DD/MM/YYYY"));
                var diferenca_em_dias = moment.duration(diferenca).asDays();
                if (diferenca_em_dias >= 0 && diferenca_em_dias <= 7 && razao == "AUSENCIA DE SINAL" && login == "HiPlatform" || diferenca_em_dias >= 0 && diferenca_em_dias <= 7 && razao == "AUSENCIA DE SINAL - PROBLEMAS NA INSTALAÇÃO (OS)" && login == "URA") {
                    alert('True!')
                    //document.getElementsByClassName("answButton")[0].click();
                    registroEncontrado = true;
                    break;
                }
                i += 1
            }
            if (registroEncontrado === false) {
                alert('False!')
            }
        }, 5000);
    }
});
$.ajaxSetup({ cache: false });