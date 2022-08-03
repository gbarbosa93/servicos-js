/*V2.220503*/
/*Textos acima dos balões*/
var verbalize = document.getElementById('verbalize');
if (verbalize) {
    var txt_verbalize = "Verbalize conforme orientação";
    function escrever_verbalize(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 60);
    };
}

var info_esquerda = document.getElementById('informe_esquerda');
if (info_esquerda) {
    var txt_info_esquerda = "Informe ao cliente";
    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 60);
    };
    escrever(txt_info_esquerda, info_esquerda);
    setTimeout(function () {
        escrever_verbalize(txt_verbalize, verbalize);
    }, 1000);
}

var perg_esquerda = document.getElementById('pergunte_esquerda');
if (perg_esquerda) {
    var txt_perg_esquerda = "Pergunte ao cliente";
    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 60);
    };
    escrever(txt_perg_esquerda, perg_esquerda);
    setTimeout(function () {
        escrever_verbalize(txt_verbalize, verbalize);
    }, 1000);
}

var oriente_esquerda = document.getElementById('oriente_esquerda');
if (oriente_esquerda) {
    var txt_oriente_esquerda = "Oriente o cliente";
    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 60);
    };
    escrever(txt_oriente_esquerda, oriente_esquerda);
    setTimeout(function () {
        escrever_verbalize(txt_verbalize, verbalize);
    }, 1000);
}

var oriente_incentivo = document.getElementById('oriente_incentivo');
if (oriente_incentivo) {
    var txt_oriente_incentivo = "Oriente o cliente e incentive o aplicativo SKY";
    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 60);
    };
    escrever(txt_oriente_incentivo, oriente_incentivo);
    setTimeout(function () {
        escrever_verbalize(txt_verbalize, verbalize);
    }, 1000);
}

var informe_incentivo_dtvgo = document.getElementById('informe_incentivo_dtvgo');
if (informe_incentivo_dtvgo) {
    var txt_informe_incentivo_dtvgo = "Informe ao cliente e incentive o DTV Go";
    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 60);
    };
    escrever(txt_informe_incentivo_dtvgo, informe_incentivo_dtvgo);
    setTimeout(function () {
        escrever_verbalize(txt_verbalize, verbalize);
    }, 1000);
}

var aten_esquerda = document.getElementById('atencao_esquerda');
if (aten_esquerda) {
    var txt_atent_esquerda = "Atenção";
    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 60);
    };
    escrever(txt_atent_esquerda, aten_esquerda);
    setTimeout(function () {
        escrever_verbalize(txt_verbalize, verbalize);
    }, 1000);
}

var loadingText = document.getElementById('loadingText');
if (loadingText) {
    var txt_aguarde_por = "Aguarde um momento, por favor...";
    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function () {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 90);
    }
    escrever(txt_aguarde_por, loadingText);
};