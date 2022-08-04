setTimeout(function () {
    var base_canais_a_la_carte = {
        "PPV": [281, 282, 283, 284, 285, 286, 287, 288, 289],
        "PREMIERE": [233, 234, 235, 236, 237, 238, 239, 240, 632, 633, 634, 635, 636, 637, 638, 639, 640],
        "COMBATE": [190, 590],
        "PLAYBOY TV": [272, 273],
        "SEX PRIVE": [274, 277],
        "SEXY HOT": [270]
    };

    document.getElementById('valida_canal').onclick = function () {
        var numero_canal = document.getElementById('numero_canal').value;
        // SE NENHUM CANAL FOR DIGITADO E CLICAR EM AVANÇAR, NÃO PERMITIREMOS QUE SIGA COM O FLUXO
        if (numero_canal == "") {
            alert('Nenhuma informação inserida, digite o número do canal e pressione em "Confirmar se o canal faz parte da programação SKY"');
            return;
        }
        // VALIDA SE É UM CANAL OPCIONAL (DE A LA CARTE) 
        var canal_encontrado = false;
        for (i = 0; i < base_canais_a_la_carte["PREMIERE"].length; i++) {
            if (numero_canal == base_canais_a_la_carte["PPV"][i]) {
                canal_encontrado = true;
                clickindex2();
                break;

            } else if (numero_canal == base_canais_a_la_carte["PREMIERE"][i]) {
                localStorage.setItem("nome_prod", "PREMIERE");
                canal_encontrado = true;
                valida_premiere();
                break;

            } else if (numero_canal == base_canais_a_la_carte["COMBATE"][i]) {
                localStorage.setItem("nome_prod", "COMBATE");
                canal_encontrado = true;
                valida_combate();
                break;

            } else if (numero_canal == base_canais_a_la_carte["PLAYBOY TV"][i]) {
                localStorage.setItem("nome_prod", "PLAYBOY TV");
                canal_encontrado = true;
                valida_playboy_tv();
                break;

            } else if (numero_canal == base_canais_a_la_carte["SEX PRIVE"][i]) {
                localStorage.setItem("nome_prod", "SEX PRIVE");
                canal_encontrado = true;
                valida_sexy_prive();
                break;

            } else if (numero_canal == base_canais_a_la_carte["SEXY HOT"][i]) {
                localStorage.setItem("nome_prod", "SEXY HOT");
                canal_encontrado = true;
                valida_sexy_hot();
                break;
            }
        }
        if (canal_encontrado == false) {
            clickindex1();
        }

        //VALIDA SE TEM PREMIERE ATIVO
        function valida_premiere() {
            var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');
            var pacoteEncontrado = false;
            for (var i = 0; i < tabela.length; i++) {
                var nome_pacote = tabela[i].cells[0].innerText.split("-")[0].trim().toUpperCase();
                var status_pacote = tabela[i].cells[1].innerText;
                if (nome_pacote.match(/PREMIERE/) && status_pacote == "Ativo" || nome_pacote.match(/FUTEBOL/) && status_pacote == "Ativo") {
                    clickindex0();
                    pacoteEncontrado = true;
                    break;
                }
            }
            if (pacoteEncontrado === false) {
                clickindex1();
            }
        }

        //VALIDA SE TEM COMBATE ATIVO
        function valida_combate() {
            var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');
            var pacoteEncontrado = false;
            for (var i = 0; i < tabela.length; i++) {
                var nome_pacote = tabela[i].cells[0].innerText.split("-")[0].trim().toUpperCase();
                var status_pacote = tabela[i].cells[1].innerText;

                if (nome_pacote.match(/COMBATE/) && status_pacote == "Ativo" || nome_pacote.match(/COMBAT/) && status_pacote == "Ativo") {
                    clickindex0();
                    pacoteEncontrado = true;
                    break;
                }
            }
            if (pacoteEncontrado === false) {
                clickindex1();
            }
        }

        //VALIDA SE TEM PLAYBOY ATIVO
        function valida_playboy_tv() {
            var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');
            var pacoteEncontrado = false;
            for (var i = 0; i < tabela.length; i++) {
                var nome_pacote = tabela[i].cells[0].innerText.split("-")[0].trim().toUpperCase();
                var status_pacote = tabela[i].cells[1].innerText;
                if (nome_pacote.match(/PLAYBOY/) && status_pacote == "Ativo" || nome_pacote.match(/PLAY BOY/) && status_pacote == "Ativo") {
                    clickindex0();
                    pacoteEncontrado = true;
                    break;
                }
            }
            if (pacoteEncontrado === false) {
                clickindex1();
            }
        }

        //VALIDA SE TEM SEXYHOT ATIVO
        function valida_sexy_hot() {
            var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');
            var pacoteEncontrado = false;
            for (var i = 0; i < tabela.length; i++) {
                var nome_pacote = tabela[i].cells[0].innerText.split("-")[0].trim().toUpperCase();
                var status_pacote = tabela[i].cells[1].innerText;
                if (nome_pacote.match(/SEXYHOT/) && status_pacote == "Ativo" || nome_pacote.match(/SEXY HOT/) && status_pacote == "Ativo") {
                    clickindex0();
                    pacoteEncontrado = true;
                    break;
                }
            }
            if (pacoteEncontrado === false) {
                clickindex1();
            }
        }

        //VALIDA SE TEM SEXPRIVE ATIVO
        function valida_sexy_prive() {
            var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');
            var pacoteEncontrado = false;
            for (var i = 0; i < tabela.length; i++) {
                var nome_pacote = tabela[i].cells[0].innerText.split("-")[0].trim().toUpperCase();
                var status_pacote = tabela[i].cells[1].innerText;
                if (nome_pacote.match(/SEX PRIVÉ/) && status_pacote == "Ativo" || nome_pacote.match(/SEXPRIVE/) && status_pacote == "Ativo" || nome_pacote.match(/SEX PRIVE/) && status_pacote == "Ativo") {
                    clickindex0();
                    pacoteEncontrado = true;
                    break;
                }
            }
            if (pacoteEncontrado === false) {
                clickindex1();
            }
        }

    }
}, 3000);