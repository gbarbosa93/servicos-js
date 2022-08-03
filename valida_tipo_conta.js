$("#div_type").load("/ICareCustomerInteractionUI/Attendance/FirstScreen#", executar);
function executar() {
    document.getElementsByClassName("answButton")[0].style.display = "none";
    document.getElementsByClassName("answButton")[1].style.display = "none";
    var tipo_conta = document.getElementsByClassName("td-maior")[7].innerText.trim();
    switch (tipo_conta) {
        case 'PRE PAGO':
        case 'SKY Livre':
            document.getElementsByClassName("answButton")[0].click();
            break;
        case 'Normal':
            document.getElementsByClassName("answButton")[1].click();
            break;
        default:
            break;
    }
}