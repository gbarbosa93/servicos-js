var globos = ['TV GLOBO RJ', 'TV GLOBO CUIABÁ', 'TV TEM SOROCABA', 'INTER TV CABUGI - NATAL', 'TV - TRIBUNA SANTOS', 'TV ANHANGUERA - GOIÂNIA', 'TV TEM BAURU', 'INTERTV GRANDE MINAS', 'TV TEM SÃO JOSÉ DO RIO PRETO', 'EPTV SUL DE MINAS', 'TV TAU – VANGUARDA TAUBATÉ', 'TV GLOBO SP', 'TV GLOBO RECIFE', 'TV AMAZONAS - MANAUS', 'EPTV- RIBEIRÃO PRETO', 'TV GLOBO BAHIA', 'TV VERDES MARES - FORTALEZA', 'RBS - RS', 'TV TEM ITAPETININGA', 'TV GLOBO BRASÍLIA', 'TV TEM SOROCABA', 'TV GLOBO BELO HORIZONTE', 'TV VANGUARDA - SÃO JOSÉ DOS CAMPOS', 'EPTV CAMPINAS', 'RPC TV - CURITIBA', 'EPTV Central', 'Inter TV Alto Litoral', 'Inter TV Serra+Mar', 'RBS TV Blumenau', 'RBS TV Joinville', 'TV Diário', 'TV Fronteira', 'TV Integração Araxá', 'TV Integração Juiz de Fora', 'TV Rio Sul', 'TV Santa Cruz', 'EPTV- RIBEIRÃO PRETO', 'TV GLOBO Sudoeste', 'TV GLOBO Sergipe', 'TV GLOBO Asa Branca', 'GLOBO INTER TV DOS VALES', 'GLOBO TV MIRANTE SÃO LUÍS', 'GLOBO TV GAZETA DE ALAGOAS', 'GLOBO TV CLUBE', 'GLOBO TV MORENA', 'GLOBO NSC TV FLORIANÓPOLIS', 'GLOBO NSC TV CRICIÚMA', 'GLOBO NSC TV CHAPECÓ', 'GLOBO NSC TV CENTRO-OESTE', 'GLOBO TV GAZETA VITÓRIA', 'GLOBO TV INTEGRAÇÃO UBERLÂNDIA', 'GLOBO RPC MARINGÁ', 'GLOBO REDE AMAZONICA - RIO BRANCO', 'GLOBO REDE AMAZONICA - MACAPA', 'GLOBO REDE AMAZONICA - PORTO VELHO', 'GLOBO REDE AMAZONICA - BOA VISTA', 'TV LIBERAL - BELÉM', 'GLOBO TV VERDES MARES - CARIRI', 'GLOBO TV SUBAÉ', 'GLOBO RBS TV Santa Cruz', 'GLOBO RBS TV Santa Maria', 'GLOBO RBS TV Pelotas', 'GLOBO RBS TV Passo Fundo', 'GLOBO RBS TV Caxias do Sul', 'GLOBO RPC CASCAVEL', 'GLOBO RPC LONDRINA', 'GLOBO RPC PONTA GROSSA', 'GLOBO TV INTEGRAÇÃO UBERABA ', 'GLOBO RPC FOZ DO IGUAÇU'];
var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');
var produtoGloboPendente = false;

setTimeout(function () {
    for (var i = 0; i < tabela.length; i++) {
        var tr = tabela[i];
        var nomeGlobo = tr.cells[0].innerText;
        statusGlobo = tr.cells[1].innerText;
        for (var g = 0; g < globos.length; g++) {
            if (nomeGlobo == globos[g] && statusGlobo == "Pendente") {
                for (var j = 0; j < tabela.length; j++) {
                    var tr = tabela[j];
                    var nomeGlobo = tr.cells[0].innerText;
                    var statusGlobo = tr.cells[1].innerText;
                    if (nomeGlobo == globos[g] && statusGlobo == "Ativo") {
                        alert("Cliente possui Globo Pendente e Ativa");
                        produtoGloboPendente = true;
                        return;
                    }
                }
                alert("Cliente possui Globo Pendente");
                produtoGloboPendente = true;
                return;
            }
        }
    }
    if (produtoGloboPendente === false) {                                                      
        alert("Possui Globo, mas está Ativa")
    }
}, 1000);