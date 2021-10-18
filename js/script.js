let caixa = document.getElementById("caixaResposta");

function chamarJanela() {
    caixa.style.display = "block";
    if ((document.getElementById("1").checked && document.getElementById("dia").value <= 19) || (document.getElementById("12").checked && document.getElementById("dia").value >= 22)) {
        document.getElementById("mensagem").innerHTML = "Capricórnio";
        document.body.style.backgroundImage = `url("js/esquema_capricornio.jpg")`;
    }
    else if ((document.getElementById("2").checked && document.getElementById("dia").value <= 20) || (document.getElementById("1").checked && document.getElementById("dia").value >= 18)) {
        document.getElementById("mensagem").innerHTML = "Aquário";
        document.body.style.backgroundImage = `url("js/esquema_aquario.jpg")`;
    }

    else if ((document.getElementById("3").checked && document.getElementById("dia").value <= 19) || (document.getElementById("2").checked && document.getElementById("dia").value >= 20)) {
        document.getElementById("mensagem").innerHTML = "Peixes";
        document.body.style.backgroundImage = `url("js/esquema_peixes.jpg")`;
    }

    else if ((document.getElementById("4").checked && document.getElementById("dia").value <= 21) || (document.getElementById("3").checked && document.getElementById("dia").value >= 20)) {
        document.getElementById("mensagem").innerHTML = "Áries";
        document.body.style.backgroundImage = `url("js/esquema_aries.png")`;
    }

    else if ((document.getElementById("5").checked && document.getElementById("dia").value <= 21) || (document.getElementById("4").checked && document.getElementById("dia").value >= 20)) {
        document.getElementById("mensagem").innerHTML = "Touro";
        document.body.style.backgroundImage = `url("js/esquema_touro.jpg")`;
    }

    else if ((document.getElementById("6").checked && document.getElementById("dia").value <= 20) || (document.getElementById("5").checked && document.getElementById("dia").value >= 20)) {
        document.getElementById("mensagem").innerHTML = "Gêmeos";
        document.body.style.backgroundImage = `url("js/esquema_gemeos.png")`;
    }

    else if ((document.getElementById("7").checked && document.getElementById("dia").value <= 22) || (document.getElementById("6").checked && document.getElementById("dia").value >= 21)) {
        document.getElementById("mensagem").innerHTML = "Câncer";
        document.body.style.backgroundImage = `url("js/esquema_cancer-1.jpg")`;
    }

    else if ((document.getElementById("8").checked && document.getElementById("dia").value <= 22) || (document.getElementById("7").checked && document.getElementById("dia").value >= 23)) {
        document.getElementById("mensagem").innerHTML = "Leão";
        document.body.style.backgroundImage = `url("js/esquema_leao.jpg")`;
    }

    else if ((document.getElementById("9").checked && document.getElementById("dia").value <= 22) || (document.getElementById("8").checked && document.getElementById("dia").value >= 23)) {
        document.getElementById("mensagem").innerHTML = "Virgem";
        document.body.style.backgroundImage = `url("js/esquema_virgem.png")`;
    }

    else if ((document.getElementById("10").checked && document.getElementById("dia").value <= 22) || (document.getElementById("9").checked && document.getElementById("dia").value >= 23)) {
        document.getElementById("mensagem").innerHTML = "Libra";
        document.body.style.backgroundImage = `url("js/esquema_libra.jpg")`;
    }

    else if ((document.getElementById("11").checked && document.getElementById("dia").value <= 21) || (document.getElementById("10").checked && document.getElementById("dia").value >= 23)) {
        document.getElementById("mensagem").innerHTML = "Escorpião";
        document.body.style.backgroundImage = `url("js/esquema_escorpiao.jpg")`;
    }

    else if ((document.getElementById("12").checked && document.getElementById("dia").value <= 21) || (document.getElementById("11").checked && document.getElementById("dia").value >= 22)) {
        document.getElementById("mensagem").innerHTML = "Sagitário";
        document.body.style.backgroundImage = `url("js/esquema_sagitario.jpg")`;
    }

    else document.getElementById("mensagem").innerHTML = "Escolha alguma data";
}

function fecharJanela() {
    caixa.style.display = "none";
    for (let i = 1; i < 12; i++) {
        let check = document.getElementById(i);
        check.checked = false;
    }
}

function button() {
    let a = document.getElementById("botao");
    a.src = "images.jpg";
}

function button2() {
    let a = document.getElementById("botao");
    a.src = "images2.jpg";
}