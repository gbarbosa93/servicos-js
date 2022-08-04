document.getElementById('valida_cartao').onclick = function () {
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
                clickindex0();
                modelEncontrado = true;
                break;
            }
            else if (modelo == "SHR01") {
                clickindex1();
                modelEncontrado = true;
                break;
            }
            else if (modelo == "SKR02") {
                clickindex2();
                modelEncontrado = true;
                break;
            } else if (modelo == "S12" || modelo == "S14" || modelo == "DSR3421" || modelo == "DSR3401" || modelo == "SLB200") {
                clickindex3();
                modelEncontrado = true;
                break;
            }
            alert('Modelo de equipamento não localizado, por favor contatar a Célula Técnica!')
            modelEncontrado = true;
            break;
        }
    }
    if (modelEncontrado === false) {
        clickindex4();
    }
}