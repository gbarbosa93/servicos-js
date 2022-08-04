var dcn_globo = ['TV GLOBO RJ', 'TV GLOBO CUIABÁ', 'TV TEM SOROCABA', 'INTER TV CABUGI - NATAL', 'TV - TRIBUNA SANTOS', 'TV ANHANGUERA - GOIÂNIA', 'TV TEM BAURU', 'INTERTV GRANDE MINAS', 'TV TEM SÃO JOSÉ DO RIO PRETO', 'EPTV SUL DE MINAS', 'TV TAU – VANGUARDA TAUBATÉ', 'TV GLOBO SP', 'TV GLOBO RECIFE', 'TV AMAZONAS - MANAUS', 'EPTV- RIBEIRÃO PRETO', 'TV GLOBO BAHIA', 'TV VERDES MARES - FORTALEZA', 'RBS - RS', 'TV TEM ITAPETININGA', 'TV GLOBO BRASÍLIA', 'TV TEM SOROCABA', 'TV GLOBO BELO HORIZONTE', 'TV VANGUARDA - SÃO JOSÉ DOS CAMPOS', 'EPTV CAMPINAS', 'RPC TV - CURITIBA', 'EPTV Central', 'Inter TV Alto Litoral', 'Inter TV Serra+Mar', 'RBS TV Blumenau', 'RBS TV Joinville', 'TV Diário', 'TV Fronteira', 'TV Integração Araxá', 'TV Integração Juiz de Fora', 'TV Rio Sul', 'TV Santa Cruz', 'EPTV- RIBEIRÃO PRETO', 'TV GLOBO Sudoeste', 'TV GLOBO Sergipe', 'TV GLOBO Asa Branca', 'GLOBO INTER TV DOS VALES', 'GLOBO TV MIRANTE SÃO LUÍS', 'GLOBO TV GAZETA DE ALAGOAS', 'GLOBO TV CLUBE', 'GLOBO TV MORENA', 'GLOBO NSC TV FLORIANÓPOLIS', 'GLOBO NSC TV CRICIÚMA', 'GLOBO NSC TV CHAPECÓ', 'GLOBO NSC TV CENTRO-OESTE', 'GLOBO TV GAZETA VITÓRIA', 'GLOBO TV INTEGRAÇÃO UBERLÂNDIA', 'GLOBO RPC MARINGÁ', 'GLOBO REDE AMAZONICA - RIO BRANCO', 'GLOBO REDE AMAZONICA - MACAPA', 'GLOBO REDE AMAZONICA - PORTO VELHO', 'GLOBO REDE AMAZONICA - BOA VISTA', 'TV LIBERAL - BELÉM', 'GLOBO TV VERDES MARES - CARIRI', 'GLOBO TV SUBAÉ', 'GLOBO RBS TV Santa Cruz', 'GLOBO RBS TV Santa Maria', 'GLOBO RBS TV Pelotas', 'GLOBO RBS TV Passo Fundo', 'GLOBO RBS TV Caxias do Sul', 'GLOBO RPC CASCAVEL', 'GLOBO RPC LONDRINA', 'GLOBO RPC PONTA GROSSA', 'GLOBO TV INTEGRAÇÃO UBERABA ', 'GLOBO RPC FOZ DO IGUAÇU'];

setTimeout(function () {
    var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');

    // VERIFICANDO NOME DA GLOBO DO ASSINANTE
    var nome_globo = "";
    for (var i = 0; i < tabela.length; i++) {
        var tr = tabela[i];
        var nome_pacote = tr.cells[0].innerText;
        var nome_pacote_formatado = nome_pacote.trim();
        for (var cont = 0; cont < dcn_globo.length; cont++) {
            if (nome_pacote_formatado.match(dcn_globo[cont])) {
                nome_globo = dcn_globo[cont];
                alert("Globo encontrada");
                break;
            }
        }
        if (nome_globo != "") {
            break;
        }
    }

    if (nome_globo == "") {
        // DIRECIONAMENTO DE SAIDA CASO NÃO TIVER GLOBO
        alert("Desculpe essa assinatura não tem produto GLOBO");
    }


    var produto_globo = false;
    while (produto_globo == false) {
        // VERIFICANDO SE CLIENTE TEM GLOBO ATIVA
        for (var j = 0; j < tabela.length; j++) {
            var tr = tabela[j];
            var nome_pacote = tr.cells[0].innerText;
            var status_pacote = tr.cells[1].innerText;
            var nome_pacote_formatado = nome_pacote.trim();
            if (nome_pacote_formatado.match(nome_globo) && status_pacote == "Ativo") {
                // DIRECIONAMENTO DE SAIDA CASO TIVER GLOBO {
                alert("Cliente possui Globo ativa no parque");
                produto_globo = true;
                break;
            }
        }

        if (produto_globo == true){
            break;
        }

        // VERIFICANDO SE CLIENTE TEM GLOBO PENDENTE
        for (var y = 0; y < tabela.length; y++) {
            var tr = tabela[y];
            var nome_pacote = tr.cells[0].innerText;
            var status_pacote = tr.cells[1].innerText;
            var nome_pacote_formatado = nome_pacote.trim();
            if (nome_pacote_formatado.match(nome_globo) && status_pacote == "Pendente") {
                // DIRECIONAMENTO DE SAIDA CASO FOR PENDENTE
                alert("Verifiquei que Produto Globo está pendente");
                produto_globo = true;
                break;
            }

        }
    }

}, 3000);      