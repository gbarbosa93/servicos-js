$(document).ready(function () {
    $("#telaConsulta").load("/ICareCustomerManagementUI/Cadastre/CadastralData", consultar);
    function consultar() {
        var uf = document.getElementById("hdEstadoInstalacao").value;
        if (uf == "RJ" || uf == "MG" || uf == "DF" || uf == "RS" || uf == "BA") {
            document.getElementsByClassName("answButton")[0].click();
        }
        else {
            document.getElementsByClassName("answButton")[1].click();
        }
    }
});
$.ajaxSetup({ cache: false });