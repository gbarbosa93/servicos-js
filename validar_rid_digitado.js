$.ajaxSetup({ cache: false });
$(document).ready(function () {
    $("#telaLeitura").load("/ICareProblemManagementUI/EquipmentsStatus", consultar);
    function consultar() {
        document.getElementById('valida_rid').onclick = function () {
            var tabela_rid = document.getElementById("telaLeitura").getElementsByTagName("table")[0].querySelectorAll('tbody tr');
            var rid_receptor = document.getElementById('rid_receptor');
            var rid = rid_receptor.value;
            var ridEncontrado = false;
            if (rid == "") {
                swal("Ops!", "Insira o número do ID do receptor informado pelo cliente!", "warning");
                return;
            }

            for (var i = 0; i < tabela_rid.length; i++) {
                var id_receptor = tabela_rid[i].cells[5].innerText;
                //var modelo = tabela_rid[i].cells[4].innerText;
                if (rid == id_receptor) {
                    //localStorage.setItem("modelo", modelo);
                    document.getElementsByClassName("answButton")[0].click();
                    ridEncontrado = true;
                    break;
                }
            }
            if (ridEncontrado === false) {
                document.getElementsByClassName("answButton")[1].click();
            }

        }
    }
}
);