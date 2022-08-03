setTimeout(function () {
    var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[1].querySelectorAll('tbody tr');
    var cont = 0;
    for (var i = 0; i < tabela.length; i++) {
        var tr = tabela[i];
        var tr1 = tr.cells[2].innerText;
        if (tr1 == "Active") {
            cont += 1;
        }
    }
    if (cont >= 2) {
        habilita_botao();
        escrever(texto, div);
        escrever2(texto2, div2);
        mais_equip();
    }
    else {
        equipamento_1();
    }
}, 2000);

function equipamento_1() {
    var modelEncontrado = false;
    var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[1].querySelectorAll('tbody tr');
    for (var i = 0; i < tabela.length; i++) {
        var tr = tabela[1];
        var modelo = tr.cells[4].innerText;
        if (modelo == "SHR23" || modelo == "SHR26" || modelo == "SHR44" || modelo == "SH25" || modelo == "SH26" || modelo == "SH01" || modelo == "SH10" || modelo == "SH20") {
            document.getElementsByClassName("answButton")[0].click();
            modelEncontrado = true;
            break;
        }
        else if (modelo == "SHR01") {
            document.getElementsByClassName("answButton")[1].click();
            modelEncontrado = true;
            break;
        }
        else if (modelo == "SKR02") {
            document.getElementsByClassName("answButton")[3].click();
            modelEncontrado = true;
            break;
        }
        else if (modelo == "S12" || modelo == "S14" || modelo == "DSR3421" || modelo == "DSR3401" || modelo == "SLB200") {
            document.getElementsByClassName("answButton")[2].click();
            modelEncontrado = true;
            break;
        }
        alert("Modelo de equipamento não localizado");
        modelEncontrado = true;
        break;
    }
    if (modelEncontrado === false) {
        alert('Equipamento não encontrado!')
    }
}

function mais_equip() {
    document.getElementById('avancar').onclick = function () {
        var tabela = document.getElementById("SideMenu").getElementsByTagName("table")[1].querySelectorAll('tbody tr');
        var modelEncontrado = false;
        var smartcard = document.getElementById('smartcard');
        var sc = smartcard.value;
        if (sc == "") {
            alert('Insira o número do cartão informado pelo cliente!')
            document.getElementById('smartcard').style.border = "2px solid red";
            document.getElementById("smartcard").onclick = function () { mouseOver() };
            return;
        }

        for (var i = 0; i < tabela.length; i++) {
            var tr = tabela[i];
            if (tr.cells[0].innerText === sc) {
                var modelo = tr.cells[4].innerText;
                if (modelo == "SHR23" || modelo == "SHR26" || modelo == "SHR44" || modelo == "SH25" || modelo == "SH26" || modelo == "SH01" || modelo == "SH10" || modelo == "SH20") {
                    document.getElementsByClassName("answButton")[0].click();
                    modelEncontrado = true;
                    break;
                }
                else if (modelo == "SHR01") {
                    document.getElementsByClassName("answButton")[1].click();
                    modelEncontrado = true;
                    break;
                }
                else if (modelo == "SKR02") {
                    document.getElementsByClassName("answButton")[3].click();
                    modelEncontrado = true;
                    break;
                } else if (modelo == "S12" || modelo == "S14" || modelo == "DSR3421" || modelo == "DSR3401" || modelo == "SLB200") {
                    document.getElementsByClassName("answButton")[2].click();
                    modelEncontrado = true;
                    break;
                }
                alert("Modelo de equipamento não localizado");
                modelEncontrado = true;
                break;
            }
        }
        if (modelEncontrado === false) {
            alert('Equipamento não encontrado. Por favor, verifique o número do cartão de acesso, digite novamente e clique em AVANÇAR!')
        }
    }
}

function habilita_botao() {
    document.getElementById('loadShadow').style.display = "none";
    document.getElementById('loadBox').style.display = "none";
    document.getElementById('alinhamento').style.display = "inline";
    document.getElementById('alinhamento2').style.display = "inline";
    document.getElementById('smartcard').style.display = "inline";
    document.getElementById('avancar').style.display = "inline";
}

$.ajaxSetup({ cache: false });