document.getElementsByClassName("answButton")[0].style.display = "none";
document.getElementsByClassName("answButton")[1].style.display = "none";
$(document).ready(function () {
    $("#div1").load("http://icareclientes.sky.com.br/ICareCustomerInteractionUI/Attendance/FirstScreen/?tab=3&type=external", exibir);
    function exibir() {
        document.getElementsByClassName("answButton")[0].style.display = "none";
        document.getElementsByClassName("answButton")[1].style.display = "none";
        var type = document.getElementById("div1").getElementsByClassName("td-maior")[2].innerText;
        var txt_type = type.trim()
        if (txt_type == "Pessoa Física") {
            document.getElementsByClassName("answButton")[0].click();
        }
        else {
            document.getElementsByClassName("answButton")[1].click();
        }
    }
})
$.ajaxSetup({ cache: false });