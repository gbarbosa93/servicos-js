//V4.220720 TESTE UPLOAD

var str = document.getElementsByClassName("conteudoTitulo")[0].innerText;
var nome_fluxo = str.split(":")[1];
document.getElementsByClassName("conteudoTitulo")[0].innerHTML = nome_fluxo;

function clickindex0() {
  document.getElementsByClassName("answButton")[0].click();
}
function clickindex1() {
  document.getElementsByClassName("answButton")[1].click();
}
function clickindex2() {
  document.getElementsByClassName("answButton")[2].click();
}
function clickindex3() {
  document.getElementsByClassName("answButton")[3].click();
}
function clickindex4() {
  document.getElementsByClassName("answButton")[4].click();
}
function click_btsky() {
  loadWorkFlow("/ICareEnterpriseWorkFlowUI/FlowStart/GotoNextStep/1244");
}
function click_btdtvgo() {
  loadWorkFlow("/ICareEnterpriseWorkFlowUI/FlowStart/GotoNextStep/1310");
}
function click_btskyplay() {
  loadWorkFlow("/ICareEnterpriseWorkFlowUI/FlowStart/GotoNextStep/1090");
}

var conteudo = document.getElementsByClassName("conteudo")[0];
conteudo.innerHTML +=
  "<div id='lateral_esquerda'><img id='logo_gpt' src='' alt=''><div id='bts-menu'><input type='button' class='bt-sky' onclick='click_btsky();' /><input type='button' class='bt-dtvgo' onclick='click_btdtvgo();' /><input type='button' class='bt-skybl' onclick='click_btskyplay();' /></div></div><div id='lateral_direita'><img id='geral' src='' alt='' /></div>";

var btnVoltar = document.getElementsByClassName("btnQuestion")[0];
btnVoltar.innerHTML +=
  "<input type='button' id='btnHome' onclick='click_btsky();'></input>";

var isChrome = !!window.chrome;
if (isChrome == true) {
  document.getElementById("logo_gpt").src =
    "/ICareUICommonCDN/Content/GPTUpload/LOGO_NEW_GPT.png";
} else {
  document.getElementById("logo_gpt").src =
    "/ICareUICommonCDN/Content/GPTUpload/LOGO_NEW_GPT.png";
}
