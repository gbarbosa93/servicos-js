setTimeout(function () {
    var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[1].querySelectorAll('tbody tr');
    for (var i = 0; i < tabela.length; i++) {
        var tr = tabela[i];
        var modelo = tr.cells[4].innerText;
        if (modelo == "SHR23" || modelo == "SHR26" || modelo == "SHR44") {
            document.getElementsByClassName("answButton")[0].click();
            break;
        }
        else if (modelo == "SHR01" || modelo == "SH25" || modelo == "SH26" || modelo == "SH01" || modelo == "SH10" || modelo == "SH20") {
            document.getElementsByClassName("answButton")[0].click();
            break;
        }
        else if (modelo == "SKR02") {
            document.getElementsByClassName("answButton")[3].click();
            break;
        }
        else if (modelo == "S12" || modelo == "S14" || modelo == "DSR3421" || modelo == "DSR3401") {
            document.getElementsByClassName("answButton")[2].click();
            break;
        }
        alert("Modelo de equipamento não localizado");
        modelEncontrado = true;
        break;
    }
}, 2000);
$.ajaxSetup({ cache: false });
