$(document).ready(function () {
    $("#div1").load("http://icareclientes.sky.com.br/ICareEnterpriseWorkFlowUI/Workflow/History", exibir);
    function exibir() {
        document.getElementsByClassName("answButton")[0].style.display = "none";
        document.getElementsByClassName("answButton")[1].style.display = "none";
        setTimeout(function () {
            var tabela = document.getElementById("div1").getElementsByClassName("grid")[0].querySelectorAll('.odd');
            var cont1 = 0;
            while (cont1 < tabela.length) {
                var tr = tabela[cont1];
                tr.className = "AltGridRow";
                cont1 += 1;
            }
            var logindia = document.getElementById("div1").getElementsByTagName("table")[0].rows[1].cells[4].innerText;
            var nova_tabela = document.getElementById("div1").getElementsByClassName("grid")[0].querySelectorAll('.AltGridRow');
            var cont2 = 0;
            var fluxoAcessado = false;
            while (cont2 < nova_tabela.length) {
                var nova_tr = nova_tabela[cont2];
                if (nova_tr.cells[3].innerText == "SKY Pos-Pago: Cod. 77" && nova_tr.cells[4].innerText == logindia) {
                    document.getElementById("texto_fluxo_acessado").style.display = "block";
                    document.getElementById("txtfluxoacessado").innerText = "Identificamos que você já utilizou o fluxo de CÓDIGO 77 recentemente. O comando enviado também é efetivo para o tratamento de Código 4.";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
                    fluxoAcessado = true;
                    break;
                }
                else if (nova_tr.cells[3].innerText == "SKY Pos-Pago: Cod. 6" && nova_tr.cells[4].innerText == logindia) {
                    document.getElementById("texto_fluxo_acessado").style.display = "block";
                    document.getElementById("txtfluxoacessado").innerText = "Identificamos que você já utilizou o fluxo de CÓDIGO 6 recentemente. O comando enviado também é efetivo para o tratamento de Código 4.";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
                    fluxoAcessado = true;
                    break;
                }
                else if (nova_tr.cells[3].innerText == "SKY Pos-Pago: Canal nao aparece na grade" && nova_tr.cells[4].innerText == logindia) {
                    document.getElementById("texto_fluxo_acessado").style.display = "block";
                    document.getElementById("txtfluxoacessado").innerText = "Identificamos que você já utilizou o fluxo de CANAL NÃO APARECE NA GRADE recentemente. O comando enviado também é efetivo para o tratamento de Código 4.";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
                    fluxoAcessado = true;
                    break;
                }
                else if (nova_tr.cells[3].innerText == "SKY Pos-Pago: Evento nao disponivel" && nova_tr.cells[4].innerText == logindia) {
                    document.getElementById("texto_fluxo_acessado").style.display = "block";
                    document.getElementById("txtfluxoacessado").innerText = "Identificamos que você já utilizou o fluxo de EVENTO NÃO DISPONÍVEL recentemente. O comando enviado também é efetivo para o tratamento de Código 4.";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
                    fluxoAcessado = true;
                    break;
                }
                else if (nova_tr.cells[3].innerText == "SKY Pos-Pago: Nao sai do canal 400 (canal do cliente)" && nova_tr.cells[4].innerText == logindia) {
                    document.getElementById("texto_fluxo_acessado").style.display = "block";
                    document.getElementById("txtfluxoacessado").innerText = "Identificamos que você já utilizou o fluxo de NÃO SAI DO CANAL DO CLIENTE recentemente. O comando enviado também é efetivo para o tratamento de Código 4.";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
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