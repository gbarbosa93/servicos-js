$(document).ready(function () {
    $("#telaLeitura").load("http://icareclientes.sky.com.br/ICareEnterpriseWorkFlowUI/Workflow/History", exibir);
    function exibir() {
        document.getElementsByClassName("answButton")[0].style.display = "none";
        document.getElementsByClassName("answButton")[1].style.display = "none";
        setTimeout(function () {
            var tabela = document.getElementById("telaLeitura").getElementsByClassName("grid")[0].querySelectorAll('.odd');
            var cont1 = 0;
            while (cont1 < tabela.length) {
                var tr = tabela[cont1];
                tr.className = "AltGridRow";
                cont1 += 1;
            }
            var data_atual = new Date();
            var sub_12_dataatual = (new Date(data_atual) - ((12 * 60 * 60) * 1000));
            var data_atual_menos_12 = new Date(sub_12_dataatual);
            var nova_tabela = document.getElementById("telaLeitura").getElementsByClassName("grid")[0].querySelectorAll('.AltGridRow');
            var cont2 = 1;
            var fluxoAcessado = false;
            while (cont2 < nova_tabela.length) {
                var nova_tr = nova_tabela[cont2];
                var data_e_hr_fluxo = nova_tr.cells[1].innerText;
                var data_fluxo = data_e_hr_fluxo.split(" ")[0];
                var hora_fluxo = data_e_hr_fluxo.split(" ")[1];
                var dia = data_fluxo.split("/")[0];
                var mes = data_fluxo.split("/")[1];
                var ano = data_fluxo.split("/")[2];
                var data_formatada = mes + "/" + dia + "/" + ano;
                var data_hr_formatada = data_formatada + " " + hora_fluxo;
                var data_historico = new Date(data_hr_formatada);
                var fluxo = nova_tr.cells[3].innerText;
                if (fluxo == "SKY PayTV: Informacoes do guia perdidas" && data_historico >= data_atual_menos_12) {
                    document.getElementsByClassName("answButton")[0].click();
                    fluxoAcessado = true;
                    break;
                }
                cont2 += 1;
            }
            if (fluxoAcessado === false) {
                document.getElementsByClassName("answButton")[1].click();
            }
        }, 4000);
    }
})
$.ajaxSetup({ cache: false });