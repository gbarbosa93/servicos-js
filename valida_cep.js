$(document).ready(function () {
    $("#carrega_tela").load("/ICareCustomerManagementUI/Cadastre/CadastralData", validar);
    function validar() {
        var validar_cep = document.getElementById('validar_cep');
        validar_cep.onclick = function () {
            var cep_cadastro = document.getElementById("txtCEPInstalacao");
            var cep_cadastro_valor = cep_cadastro.value;
            var cep_digitado = document.getElementById("cep_digitado");
            var cep_digitado_valor = cep_digitado.value;
            if (cep_digitado_valor == "") {
                //alert('Nenhuma informação inserida! Pergunte o CEP ao cliente, insira no campo abaixo e clique em AVANÇAR!');
                swal("Ops!", "Nenhuma informação inserida.", "warning");
            }
            else if (cep_digitado_valor == cep_cadastro_valor) {
                // alert('O CEP digitado confere com o cadastrado, clique em OK para seguir com o atendimento!');
                swal("Vamos lá!", "O CEP informado confere com o cadastrado.", "success");
                document.getElementsByClassName("answButton")[0].click();
            }
            else {
                //alert('O CEP informado pelo cliente não é o mesmo do cadastro. Portanto, será necessário seguir o fluxo de Reinstalação em novo endereço.');
                swal("Ops!", "O CEP informado é diferente do cadastrado.", "error");
                document.getElementsByClassName("answButton")[1].click();
            }
        }
    }
}
);
$.ajaxSetup({ cache: false });