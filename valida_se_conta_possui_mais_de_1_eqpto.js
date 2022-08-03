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
        document.getElementsByClassName("answButton")[0].click();
    }
    else {
        document.getElementsByClassName("answButton")[1].click();
    }
}, 2000);
$.ajaxSetup({ cache: false });