var prod_col1 = [];
setTimeout(function () {
    var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');

    // PUXA OS PRODUTOS DA COLUNA 1 PRA UMA ARRAY
    for (var prod = 0; prod < tabela.length; prod++) {
        prod_col1.push(tabela[prod].cells[0].innerText.split("-")[0].trim().toUpperCase());
    }

    var avancar = document.getElementById('avancar');
    avancar.onclick = function () {
        var numero_canal = document.getElementById('numero_canal').value;
        // SE NENHUM CANAL FOR DIGITADO E CLICAR EM AVANÇAR, NÃO PERMITIREMOS QUE SIGA COM O FLUXO
        if (numero_canal == "") {
            alert('Nenhuma informação inserida, digite o número do canal e pressione em AVANÇAR');
            return;
        }

        // VALIDA SE É UM CANAL OPCIONAL (DE A LA CARTE) POIS SE FOR, VAMOS EXIBIR ALERTA ORIENTANDO A REINICIAR O FLUXO
        // E SELECIONAR A OPÇÃO CORRETA
        if (base_canais_a_la_carte.indexOf(numero_canal) > -1) {
            alert('Para canais opcionais, por favor, reinicie o fluxo e siga a opção correta!')
            return;
        }

        // VALIDA SE É GLOBO POIS SE FOR, VAMOS EXIBIR ALERTA ORIENTANDO A REINICIAR O FLUXO E SELECIONAR A OPÇÃO CORRETA
        if (numero_canal == 4 || numero_canal == 404 || numero_canal == 5 || numero_canal == 405 || numero_canal == "10" || numero_canal == "410" || numero_canal == "12" || numero_canal == "412") {
            alert('Para GLOBO, por favor, reinicie o fluxo e siga a opção correta!')
            return;
        }

        // VALIDA SE É UM CANAL FECHADO DOS PACOTES OPCIONAIS HDTV FULL, EXTRA
        if (base_opcionais_hd["OPCIONAL EXTRA HD"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("OPCIONAL EXTRA HD 2017") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        else if (base_opcionais_hd["PACOTE HDTV"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("PACOTE HDTV") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        else if (base_opcionais_hd["PACOTE HDTV EXTRA"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("PACOTE HDTV EXTRA") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        else if (base_opcionais_hd["PACOTE HDTV FULL"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("PACOTE HDTV FULL") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        else if (base_opcionais_hd["OPCIONAL HD LIGHT"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("OPCIONAL HD LIGHT") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        else if (base_opcionais_hd["OPCIONAL HD MIX"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("OPCIONAL HD MIX") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        else if (base_opcionais_hd["OPCIONAL HD EXTRA"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("OPCIONAL HD EXTRA") > -1 || prod_col1.indexOf("OPCIONAL HD EXTRA 1") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        else if (base_opcionais_hd["OPCIONAL HD EXTRA 2"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("OPCIONAL HD EXTRA 2") > -1 || prod_col1.indexOf("OPCIONAL HD EXTRA 3") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        else if (base_opcionais_hd["OPCIONAL HD FULL"].indexOf(numero_canal) > -1) {
            if (prod_col1.indexOf("OPCIONAL HD FULL") > -1) {
                document.getElementsByClassName("answButton")[0].click();
                return;
            }
            else {
                consultaCanal();
                return;
            }
        }

        // SE O CANAL DIGITADO NÃO EXISTIR, NÃO PERMITIREMOS QUE SIGA COM O FLUXO
        else if (todos_canais.indexOf(numero_canal) === -1) {
            alert('Canal inválido, confirme a numeração, insirda novamente e clique em AVANÇAR')
            return;
        }

        else {
            consultaCanal();
        }
        function consultaCanal() {
            for (var i = 0; i < tabela.length; i++) {
                // VALIDA PACOTE PARA SABER SE O CANAL DIGITADO ESTÁ NA COMPOSIÇÃO
                var tr = tabela[i];
                var nome_pacote = tr.cells[0].innerText;
                // REMOVE OS "- A" E "-P" DOS NOMES DOS PACOTES
                var nome_pacote_formatado = nome_pacote.split("-")[0].trim().toUpperCase();
                if (nome_pacote_formatado.match(/ADVANCED HD/) && nome_pacote_formatado.match(/2018/) || nome_pacote_formatado.match(/COMBO PLUS/) && nome_pacote_formatado.match(/2018/) || nome_pacote_formatado.match(/COMBO ADVANCED/) && nome_pacote_formatado.match(/2018/) || nome_pacote_formatado.match(/COMBO ADVANCED/) && nome_pacote_formatado.match(/2019/) || nome_pacote_formatado.match(/NEW COMBO FULL/) && nome_pacote_formatado.match(/2018/) || nome_pacote_formatado.match(/COMBO MEDIA CENTER/) && nome_pacote_formatado.match(/2018/) || nome_pacote_formatado.match(/COMBO FULL/) && nome_pacote_formatado.match(/2018/) || nome_pacote_formatado.match(/COMBO PLUS CINEMA/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/MUNDO ESPECIAL/) || nome_pacote_formatado.match(/ADVANCED/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/HD/)) {
                    for (var i = 0; i < base_pacotes_2018["ADVANCED HD 2018"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2018["ADVANCED HD 2018"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/MASTER/) && nome_pacote_formatado.match(/2018/) || nome_pacote_formatado.match(/MASTER/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/HD/)) {
                    for (var i = 0; i < base_pacotes_2018["MASTER HD 2018"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2018["MASTER HD 2018"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/SMART/) && nome_pacote_formatado.match(/2018/) || nome_pacote_formatado.match(/SMART/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/HD/)) {
                    for (var i = 0; i < base_pacotes_2018["SMART HD 2018"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2018["SMART HD 2018"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/COMBO MEDIA CENTER/) && nome_pacote_formatado.match(/2019/) || nome_pacote_formatado.match(/COMBO FULL/) && nome_pacote_formatado.match(/2019/) || nome_pacote_formatado.match(/COMBO PLUS/) && nome_pacote_formatado.match(/2019/) || nome_pacote_formatado.match(/COMBO MEGA/) && nome_pacote_formatado.match(/2019/)) {
                    for (var i = 0; i < base_pacotes_2019["MEGA HD 2019"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2019["MEGA HD 2019"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/EASY/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/SD/)) {
                    for (var i = 0; i < base_pacotes_2019["EASY SD 2019"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2019["EASY SD 2019"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/EASY/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/HD/)) {
                    for (var i = 0; i < base_pacotes_2019["EASY HD 2019"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2019["EASY HD 2019"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/FUN/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/SD/)) {
                    for (var i = 0; i < base_pacotes_2019["FUN SD 2019"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2019["FUN SD 2019"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/FUN/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/HD/)) {
                    for (var i = 0; i < base_pacotes_2019["FUN HD 2019"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2019["FUN HD 2019"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/SMART/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/SD/)) {
                    for (var i = 0; i < base_pacotes_2019["SMART SD 2019"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2019["SMART SD 2019"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/MASTER/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/SD/)) {
                    for (var i = 0; i < base_pacotes_2019["MASTER SD 2019"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2019["MASTER SD 2019"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/ADVANCED/) && nome_pacote_formatado.match(/2019/) && nome_pacote_formatado.match(/SD/)) {
                    for (var i = 0; i < base_pacotes_2018["ADVANCED SD 2018"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2018["ADVANCED SD 2018"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/COMBO MEGA/) && nome_pacote_formatado.match(/2020/) || nome_pacote_formatado.match(/COMBO PLUS/) && nome_pacote_formatado.match(/2020/) || nome_pacote_formatado.match(/COMBO FULL/) && nome_pacote_formatado.match(/2020/) || nome_pacote_formatado.match(/COMBO MEDIA CENTER/) && nome_pacote_formatado.match(/2020/)) {
                    for (var i = 0; i < base_pacotes_2020["MEGA HD 2020"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2020["MEGA HD 2020"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/EASY/) && nome_pacote_formatado.match(/2020/) && nome_pacote_formatado.match(/SD/)) {
                    for (var i = 0; i < base_pacotes_2020["EASY SD 2020"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2020["EASY SD 2020"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/EASY/) && nome_pacote_formatado.match(/2020/) && nome_pacote_formatado.match(/HD/)) {
                    for (var i = 0; i < base_pacotes_2020["EASY HD 2020"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2020["EASY HD 2020"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/FUN/) && nome_pacote_formatado.match(/2020/) && nome_pacote_formatado.match(/SD/)) {
                    for (var i = 0; i < base_pacotes_2020["FUN SD 2020"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2020["FUN SD 2020"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/FUN/) && nome_pacote_formatado.match(/2020/) && nome_pacote_formatado.match(/HD/)) {
                    for (var i = 0; i < base_pacotes_2020["FUN HD 2020"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2020["FUN HD 2020"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

                else if (nome_pacote_formatado.match(/MEGA/) && nome_pacote_formatado.match(/2020/) && nome_pacote_formatado.match(/HD/)) {
                    for (var i = 0; i < base_pacotes_2020["MEGA HD 2020"].length; i++) {
                        canais_do_pacote.push(base_pacotes_2020["MEGA HD 2020"][i].toString());
                    }
                    if (canais_do_pacote.indexOf(numero_canal) > - 1) {
                        document.getElementsByClassName("answButton")[0].click();
                    }
                    else {
                        document.getElementsByClassName("answButton")[1].click();
                    }
                }

            }
        }
    }
}, 2000);