var pedidoEncontrado = false;
document.getElementsByClassName("answButton")[0].style.display = "none";
document.getElementsByClassName("answButton")[1].style.display = "none";
$(document).ready(function () {
    $("#div1").load("http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Orders/Orders/?tab=3", exibir);
    function exibir() {
        document.getElementsByClassName("answButton")[0].style.display = "none";
        document.getElementsByClassName("answButton")[1].style.display = "none";
        setTimeout(function () {

            var data_atual = new Date();
            var sub_2_dataatual = (new Date(data_atual) - ((2 * 60 * 60) * 1000));
            var data_atual_menos_2 = new Date(sub_2_dataatual);
            var tabela = document.getElementById("div1").getElementsByClassName("gridComBordaBranca")[0].querySelectorAll('table tbody tr');
            var cont1 = 0;

            while (cont1 < tabela.length) {
                var tr = tabela[cont1];
                tr.className = "AltGridRow";
                cont1 += 2;
            }

            var nova_tabela = document.getElementById("div1").getElementsByClassName("gridComBordaBranca")[0].querySelectorAll('.AltGridRow');
            var cont2 = 0;

            while (cont2 < nova_tabela.length) {
                var nova_tr = nova_tabela[cont2];
                var col4_nome_pedido = nova_tr.cells[4].innerText;
                var col1_hr = nova_tr.cells[1].innerText;
                var col1_data = col1_hr.split(" ")[0];
                var col1_hora = col1_hr.split(" ")[1];
                var dia = col1_data.split("/")[0];
                var mes = col1_data.split("/")[1];
                var ano = col1_data.split("/")[2];
                var data_col1_formatada = mes + "/" + dia + "/" + ano;
                var data_historico = data_col1_formatada + " " + col1_hora;
                var data_historico_formatada = new Date(data_historico);

                if (col4_nome_pedido == "A La Carte" && data_historico_formatada >= data_atual_menos_2 || col4_nome_pedido == "Inclusão" && data_historico_formatada >= data_atual_menos_2 || col4_nome_pedido == "Inclusão HW" && data_historico_formatada >= data_atual_menos_2 || col4_nome_pedido == "Upgr. sem troca de tecnologia" && data_historico_formatada >= data_atual_menos_2 || col4_nome_pedido == "Upgr. com troca de tecnologia" && data_historico_formatada >= data_atual_menos_2) {
                    document.getElementById("texto_pedido_encontrado").style.display = "block";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
                    pedidoEncontrado = true;
                    break;
                }

                else if (col4_nome_pedido == "Reativação" && data_historico_formatada >= data_atual_menos_2) {
                    document.getElementById("texto2_pedido_encontrado").style.display = "block";
                    document.getElementById("txtpedidoencontrado").innerText = "Identificamos que recentemente houve uma REATIVAÇÃO DA ASSINATURA, o comando para liberação do sinal já foi enviado.";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
                    pedidoEncontrado = true;
                    break;
                }

                else if (col4_nome_pedido == "Reconexão Palavra do Cliente" && data_historico_formatada >= data_atual_menos_2) {
                    document.getElementById("texto2_pedido_encontrado").style.display = "block";
                    document.getElementById("txtpedidoencontrado").innerText = "Identificamos que recentemente houve uma RECONEXÃO PALAVRA DO CLIENTE, o comando para liberação do sinal já foi enviado.";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
                    pedidoEncontrado = true;
                    break;
                }

                else if (col4_nome_pedido == "Reconexão Suspensão Temporária" && data_historico_formatada >= data_atual_menos_2) {
                    document.getElementById("texto2_pedido_encontrado").style.display = "block";
                    document.getElementById("txtpedidoencontrado").innerText = "Identificamos que recentemente houve uma RECONEXÃO SUSPENSÃO TEMPORÁRIA, o comando para liberação do sinal já foi enviado.";
                    document.getElementById("carregamento").style.display = "none";
                    document.getElementsByClassName("answButton")[0].style.display = "inline-table";
                    pedidoEncontrado = true;
                    break;
                }
                cont2 += 1;
            }
        }, 2000);
    }
});

setTimeout(function () {
    if (pedidoEncontrado === false) {
        document.getElementsByClassName("answButton")[1].click();
    }
}, 7000);

$.ajaxSetup({ cache: false });