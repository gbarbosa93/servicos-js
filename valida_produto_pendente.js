setTimeout(function () {
    var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[3].querySelectorAll('tbody tr');
    var nome_prod = localStorage.getItem("nome_prod");
    var alacartePendente = false;
    for (var i = 0; i < tabela.length; i++) {
        var nome_alacarte = tabela[i].cells[0].innerText;
        var status_alacarte = tabela[i].cells[1].innerText;
        if (nome_alacarte.match(nome_prod) && status_alacarte == "Pendente") {
            for (var j = 0; j < tabela.length; j++) {
                var nome_alacarte = tabela[j].cells[0].innerText;
                var status_alacarte = tabela[j].cells[1].innerText;
                if (nome_alacarte.match(nome_prod) && status_alacarte == "Ativo") {
                    alacartePendente = true;
                    document.getElementsByClassName("answButton")[1].click();
                    break;
                }
            }
            alacartePendente = true;
            document.getElementsByClassName("answButton")[0].click();
            break;
        }
    }
    if (alacartePendente === false) {
        document.getElementsByClassName("answButton")[1].click();
    }
}, 1000);