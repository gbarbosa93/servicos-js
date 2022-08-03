// V3.210503

var OsiEncontrada = false;
$(document).ready(function () {
    //Tela CONSULTA OSI carregada dentro da DIV1 para leitura das informações
    $("#div1").load("http://icareclientes.sky.com.br/ICareCustomerInteractionUI/OsiSearch/Index/?tab=3", exibir);
    //Após carregamento da tela, chamamos a função EXIBIR
    function exibir() {
        //Aqui impedimos que as respostas (CONTINUES) do GPT apareçam após carregamento
        document.getElementsByClassName("answButton")[0].style.display = "none";
        document.getElementsByClassName("answButton")[1].style.display = "none";
        setTimeout(function () {
            //Com a tela CONSULTA OSI já carregada dentro da DIV buscamos nessa tela a tabela de pendentes
            var tabela = document.getElementById("cGrid").getElementsByTagName("table")[0].querySelectorAll('table tbody tr');
            var cont1 = 0;
            //Lemos as informações da coluna 3 (Razão) e 4 (Status), linha a linha, até finalizar a leitura
            while (cont1 < tabela.length) {
                var tr = tabela[cont1];
                //Coluna 3
                var osi = tr.cells[2].innerText;
                //Coluna 4
                var status = tr.cells[3].innerText;
                if (osi == "CANAL NAO APARECE NA GRADE - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "CANAL NAO DISPONIVEL - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "CODIGO 14 - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "CODIGO 4 - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "CODIGO 6 - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "CODIGO 77 - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "NAO SAI DO CANAL 400 - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "OUTROS MOTIVOS TÉCNICOS - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "TELA CINZA OU PRETA OU BRANCA - ENCAMINHADO A CELULA TECNICA" && status == "Pendente" || osi == "TRATAMENTO VIP - ENCAMINHADO A CELULA TECNICA" && status == "Pendente") {
                    //Se for encontrado registro de CÓDIGO 4 com status PENDENTE em qualquer linha, é acionado o método abaixo, que simula o clique do mouse no primeiro CONTINUE que foi ocultado
                    document.getElementsByClassName("answButton")[0].click();
                    OsiEncontrada = true;
                    break;
                }
                cont1 += 2;
            }
        }, 2000);
    }
});

//Função executada após 5 segundos
setTimeout(function () {
    if (OsiEncontrada === false) {
        //Caso a tabela procurada não exista ou se não tiver nenhum registro CODIGO 4 - ENCAMINHADO A CELULA TECNICA
        //com status PENDENTE, é acionado o método abaixo, que simula o clique do mouse no segundo CONTINUE que foi ocultado
        document.getElementsByClassName("answButton")[1].click();
    }
}, 5000);

$.ajaxSetup({ cache: false });